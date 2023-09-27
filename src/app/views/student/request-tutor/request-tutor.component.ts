import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AcademicTutoringTextbook,
  CLASSROOM_TYPES_CONST,
  TEXTBOOK_EDITION_CONST,
} from 'src/app/config';
import { IClass, Tutor } from 'src/app/models';
import { AlertNotificationService } from 'src/app/shared';
import {
  addLookups,
  addMisc,
  getLookups,
  getMisc,
  LONG_DAYS_WEEK,
} from 'src/app/utils';
import {
  CoursesService,
  LookupsService,
  MiscService,
  TutorsService,
} from 'src/app/_api';

@Component({
  selector: 'metutors-student-request-tutor',
  templateUrl: './request-tutor.component.html',
  styleUrls: ['./request-tutor.component.scss'],
  providers: [DatePipe],
})
export class RequestTutorComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') private myStepper: MatStepper;
  courseInformationForm: FormGroup;
  classroomDetailsForm: FormGroup;
  classroomScheduleForm: FormGroup;
  selectTutorForm: FormGroup;
  getCourseLevelSub: Subscription;
  getCourseFieldSub: Subscription;
  getCourseFieldSubjectSub: Subscription;
  courseLevel: any[] = [];
  courseField: any[] = [];
  languages: any[] = [];
  subjects: any[] = [];
  classrooms: IClass[] = [];
  selectedClassrooms: IClass[] = [];
  tutors: Tutor[] = [];
  prices: any;
  loadingClassrooms: boolean;
  loadingTutors: boolean;
  isCreatingCourse: boolean = false;

  reviewInfo: any = {};

  constructor(
    private title: Title,
    private _formBuilder: FormBuilder,
    private lookupsService: LookupsService,
    private miscService: MiscService,
    private coursesService: CoursesService,
    private tutorsService: TutorsService,
    private datePipe: DatePipe,
    private alertNotificationService: AlertNotificationService,
    private router: Router
  ) {
    this.title.setTitle('Request Academic Tutoring');
  }

  ngOnInit(): void {
    this._prepareCourseLevel();
    this._prepareCourseField();
    this._prepareLanguages();
    this._fetchCourseFieldSubject();
    this._fetchAcademicTutoringPrice();

    this.courseInformationForm = this._formBuilder.group({
      courseLevel: [null, Validators.required],
      courseField: [null, Validators.required],
      preferedTutoringLanguage: [null, Validators.required],
      subject: [null, Validators.required],
      information: [null, Validators.required],
      file: [null],
      name: [null],
      edition: [null],
      author: [null],
    });
    this.classroomDetailsForm = this._formBuilder.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      days: [null, Validators.required],
      type: [null, Validators.required],
      seatAttendees: [
        1,
        [Validators.required, Validators.max(10), Validators.min(1)],
      ],
      duration: [{ value: 0, disabled: true }, Validators.required],
      hours: [{ value: 0, disabled: true }, Validators.required],
      totalClasses: [{ value: 0, disabled: true }, Validators.required],
      tempDuration: [0, Validators.required],
      tempHours: [0, Validators.required],
      tempTotalClasses: [0, Validators.required],
    });
    this.classroomScheduleForm = this._formBuilder.group({
      classes: [null, Validators.required],
    });
    this.selectTutorForm = this._formBuilder.group({
      tutor: [null, Validators.required],
    });
  }

  nextStep(): void {
    this.myStepper.next();
    this._prepareReviewInfo();
  }

  backStep(): void {
    this.myStepper.previous();
  }

  generateClassRooms(): void {
    if (this.classroomDetailsForm.valid) {
      const value = this._generateClassroomForm(
        this.classroomDetailsForm.value
      );
      this.loadingClassrooms = true;
      this.coursesService.generateClassRooms(value).subscribe(
        (result) => {
          this.loadingClassrooms = false;
          if (result && result.length) {
            this.classrooms = [];
            result.forEach((item, index) => {
              this.classrooms[index] = {
                ...item,
                duration: this.classroomDetailsForm.value.tempDuration,
              };
            });
            this.selectedClassrooms = this.classrooms;
          }
        },
        (error) => {
          this.loadingClassrooms = false;
          this.alertNotificationService.error(
            'Error in generating the classrooms'
          );
        }
      );
    }
  }

  loadTutors(classrooms: IClass[]): void {
    if (classrooms && classrooms.length) {
      this.selectedClassrooms = classrooms;
      const appointments = this._generateAppointments(classrooms);

      const value = {
        course_field: this.courseInformationForm.value.courseField,
        subject: this.courseInformationForm.value.subject,
        start_date: this.datePipe.transform(
          new Date(this.classroomDetailsForm.value?.startDate),
          'yyyy-MM-dd'
        ),
        end_date: this.datePipe.transform(
          new Date(this.classroomDetailsForm.value?.endDate),
          'yyyy-MM-dd'
        ),
        appointments,
      };

      this.loadingTutors = true;
      this.tutorsService.generateTutors(value).subscribe(
        (result) => {
          this.loadingTutors = false;
          this.tutors = result;
        },
        (error) => {
          this.loadingTutors = false;
          this.alertNotificationService.error('Error in generating the tutors');
        }
      );
    }
  }

  onSubmit(): void {
    const value = {
      ...this.courseInformationForm.value,
      ...this._generateClassroomForm(this.classroomDetailsForm.value),
      ...this.selectTutorForm.value,
      classrooms: this.selectedClassrooms.map((item: any) => {
        const classroom: any = {
          number: item.number,
          title: item.title,
          seat_attendees: item.attendees,
          _status_id: item.id,
          _date: item.date,
          _class_start_time: item.startTime,
          _class_end_time: item.endTime,
        };

        return classroom;
      }),
    };

    this.isCreatingCourse = true;
    this.coursesService.createCourse(value).subscribe(
      (response) => {
        this.isCreatingCourse = false;
        this.classroomDetailsForm.reset();
        this.classroomScheduleForm.reset();
        this.courseInformationForm.reset();
        this.selectTutorForm.reset();
        this.alertNotificationService.success(
          'Congrats! Your request has been created successfully!'
        );
        this.router.navigate([
          '/payment/invoice-details',
          response?.result?.id,
        ]);
      },
      (error) => {
        this.isCreatingCourse = false;
        this.alertNotificationService.error(
          'An error occured while creating the course '
        );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.getCourseLevelSub) {
      this.getCourseLevelSub.unsubscribe();
    }
    if (this.getCourseFieldSub) {
      this.getCourseFieldSub.unsubscribe();
    }
  }

  private _prepareReviewInfo(): void {
    if (this.courseInformationForm.valid) {
      if (this.courseInformationForm.value.courseLevel)
        this.reviewInfo.courseLevel =
          this.courseLevel && this.courseLevel.length
            ? this.courseLevel.filter(
                (sub) =>
                  sub?.code === this.courseInformationForm.value.courseLevel
              )[0]?.name
            : '';
      if (this.courseInformationForm.value.courseField)
        this.reviewInfo.courseField =
          this.courseField && this.courseField.length
            ? this.courseField.filter(
                (sub) =>
                  sub?.code === this.courseInformationForm.value.courseField
              )[0]?.name
            : '';
      if (this.courseInformationForm.value.preferedTutoringLanguage)
        this.reviewInfo.preferedTutoringLanguage =
          this.languages && this.languages.length
            ? this.languages.filter(
                (sub) =>
                  sub?.id ===
                  this.courseInformationForm.value.preferedTutoringLanguage
              )[0]?.name
            : '';
      if (this.courseInformationForm.value.subject)
        this.reviewInfo.subject =
          this.subjects && this.subjects.length
            ? this.subjects.filter(
                (sub) => +sub?.id === +this.courseInformationForm.value.subject
              )[0]?.name
            : '';
      if (this.courseInformationForm.value.information) {
        this.reviewInfo.info = this.courseInformationForm.value.information;

        if (
          this.courseInformationForm.value.information ===
          AcademicTutoringTextbook.info
        )
          this.reviewInfo.information = 'Student book';
        if (
          this.courseInformationForm.value.information ===
          AcademicTutoringTextbook.pdf
        )
          this.reviewInfo.information = 'Student textbook pdf';
        if (
          this.courseInformationForm.value.information ===
          AcademicTutoringTextbook.later
        )
          this.reviewInfo.information = 'No textbook';
      }
      if (this.courseInformationForm.value.file)
        this.reviewInfo.file = this.courseInformationForm.value.file;
      if (this.courseInformationForm.value.name)
        this.reviewInfo.name = this.courseInformationForm.value.name;
      if (this.courseInformationForm.value.edition)
        this.reviewInfo.edition =
          TEXTBOOK_EDITION_CONST[+this.courseInformationForm.value.edition];
      if (this.courseInformationForm.value.author)
        this.reviewInfo.author = this.courseInformationForm.value.author;
    }

    if (this.classroomDetailsForm.valid) {
      const classroomValue = this._generateClassroomForm(
        this.classroomDetailsForm.value
      );
      if (classroomValue.startDate)
        this.reviewInfo.startDate = classroomValue.startDate;
      if (classroomValue.endDate)
        this.reviewInfo.endDate = classroomValue.endDate;
      if (classroomValue.startTime)
        this.reviewInfo.startTime = this.datePipe.transform(
          new Date(this.classroomDetailsForm.value?.startTime),
          'h:mm a'
        );
      if (classroomValue.endTime)
        this.reviewInfo.endTime = this.datePipe.transform(
          new Date(this.classroomDetailsForm.value?.endTime),
          'h:mm a'
        );
      if (classroomValue.days)
        this.reviewInfo.days = classroomValue.days.map(
          (day) => LONG_DAYS_WEEK[day - 1]
        );
      if (classroomValue.type)
        this.reviewInfo.type = CLASSROOM_TYPES_CONST[classroomValue.type];
      if (classroomValue.seatAttendees)
        this.reviewInfo.seatAttendees = classroomValue.seatAttendees;
      if (classroomValue.duration)
        this.reviewInfo.duration = classroomValue.duration;
      if (classroomValue.hours) this.reviewInfo.hours = classroomValue.hours;
      if (classroomValue.classes)
        this.reviewInfo.classes = classroomValue.classes;
    }

    if (this.classroomScheduleForm.valid) {
      this.reviewInfo.appointments =
        this.selectedClassrooms && this.selectedClassrooms.length
          ? this.selectedClassrooms.map((item: any) => {
              const appoint: any = {
                date: this.datePipe.transform(
                  new Date(item?.date),
                  'yyyy-MM-dd'
                ),
                startTime: item?.startTime,
                endTime: item?.endTime,
                duration: item?.duration,
              };

              return appoint;
            })
          : [];

      if (this.selectedClassrooms && this.selectedClassrooms.length) {
        const hours = this.selectedClassrooms?.reduce(
          (sum: number, hr: any) => sum + +hr?.duration,
          0
        );

        if (
          this.classroomDetailsForm.value?.type.toString() ===
          Object.keys(CLASSROOM_TYPES_CONST)[0].toString()
        ) {
          this.reviewInfo.price = +this.prices?.oneOnOne * +hours;
        } else {
          this.reviewInfo.price = +this.prices?.groupStudy * +hours;
        }
      }
    }

    if (this.selectTutorForm.valid) {
      if (this.selectTutorForm.value.tutor)
        this.reviewInfo.tutor =
          this.tutors && this.tutors.length
            ? this.tutors.filter(
                (sub) => +sub?.id === +this.selectTutorForm.value.tutor
              )[0]
            : {};
    }
  }

  private _generateClassroomForm(form) {
    return {
      classes: form?.tempTotalClasses,
      days:
        form.days && form.days.length
          ? form.days.map((day) => LONG_DAYS_WEEK.indexOf(day) + 1)
          : [],
      duration: form?.tempDuration,
      startDate: this.datePipe.transform(
        new Date(form?.startDate),
        'yyyy-MM-dd'
      ),
      endDate: this.datePipe.transform(new Date(form?.endDate), 'yyyy-MM-dd'),
      startTime: this.datePipe.transform(new Date(form?.startTime), 'HH:mm'),
      endTime: this.datePipe.transform(new Date(form?.endTime), 'HH:mm'),
      hours: form?.tempHours,
      type: form?.type,
      seatAttendees: form?.seatAttendees,
    };
  }

  private _generateAppointments(value) {
    let appointments = [];
    if (value && value.length) {
      appointments = value.map((item: any) => {
        const appoint: any = {
          date: this.datePipe.transform(new Date(item?.date), 'yyyy-MM-dd'),
          from_time: item?.startTime,
          to_time: item?.endTime,
        };

        return appoint;
      });

      return appointments;
    }
    return [];
  }

  private _prepareCourseLevel(): void {
    this.getCourseLevelSub = this.lookupsService.fetchCourseLevel().subscribe(
      (fetchedValues) => {
        this.courseLevel = fetchedValues.results;
        addLookups('courseLevel', this.courseLevel);
      },
      () => {}
    );
    this.courseLevel = getLookups().courseLevel;
  }

  private _prepareCourseField(): void {
    this.getCourseFieldSub = this.lookupsService.fetchCourseField().subscribe(
      (fetchedValues) => {
        this.courseField = fetchedValues.results;
        addLookups('courseField', this.courseField);
      },
      () => {}
    );
    this.courseField = getLookups().courseField;
  }

  private _prepareLanguages(): void {
    this.getCourseFieldSub = this.miscService.fetchLanguages().subscribe(
      (fetchedValues) => {
        this.languages = fetchedValues;
        addMisc('languages', this.languages);
      },
      () => {}
    );
    this.languages = getMisc().languages;
  }

  private _fetchCourseFieldSubject(): void {
    this.getCourseFieldSubjectSub = this.lookupsService
      .fetchCourseFieldSubject()
      .subscribe(
        (fetchedValues) => {
          const results = fetchedValues.results;
          const list = [];
          if (results && results.length) {
            results.forEach((item) => {
              list.push(...item.subjects);
            });
          }
          this.subjects = list;
          addLookups('courseSubjects', list);
        },
        () => {}
      );
    this.subjects = getLookups().courseSubjects;
  }

  private _fetchAcademicTutoringPrice(): void {
    this.getCourseFieldSub = this.miscService
      ._fetchAcademicTutoringPrice()
      .subscribe(
        (fetchedValues) => {
          this.prices = fetchedValues;
          addMisc('prices', this.prices);
        },
        () => {}
      );
    this.prices = getMisc().prices;
  }
}
