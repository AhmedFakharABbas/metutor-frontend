import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AcademicTutoringTextbook,
  CLASSROOM_TYPES_CONST,
  TEXTBOOK_EDITION_CONST,
} from 'src/app/config';
import { Course, IClass, Tutor } from 'src/app/models';
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
  selector: 'metutors-customize-classroom',
  templateUrl: './customize-classroom.component.html',
  styleUrls: ['./customize-classroom.component.scss'],
  providers: [DatePipe],
})
export class CustomizeClassroomComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') private myStepper: MatStepper;
  classroomDetailsForm: FormGroup;
  classroomScheduleForm: FormGroup;
  selectTutorForm: FormGroup;
  getCourseLevelSub: Subscription;
  getCourseFieldSub: Subscription;
  getCourseFieldSubjectSub: Subscription;
  fetchCourseSub: Subscription;
  course: Course;
  isLoadingCourse: boolean;
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
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private lookupsService: LookupsService,
    private miscService: MiscService,
    private coursesService: CoursesService,
    private tutorsService: TutorsService,
    private datePipe: DatePipe,
    private alertNotificationService: AlertNotificationService,
    private router: Router
  ) {
    this.title.setTitle('Customize classroom');
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((res: ParamMap) => {
      const id = +res.get('id');
      this._fetchCustomizeExistCoursePrice(id);

      this.isLoadingCourse = true;
      this.fetchCourseSub = this.coursesService.getCourseById(id).subscribe(
        (response) => {
          this.isLoadingCourse = false;
          this.course = response;
        },
        (error) => {
          this.isLoadingCourse = false;
        }
      );
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
        course_field: this.course?.courseField?.code,
        subject: null,
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
      courseId: this.course?.id,
      courseName: this.course?.name,
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
    this.coursesService.customizeClassroom(value).subscribe(
      (response) => {
        this.isCreatingCourse = false;
        this.classroomDetailsForm.reset();
        this.classroomScheduleForm.reset();
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

  private _fetchCustomizeExistCoursePrice(id: number): void {
    this.getCourseFieldSub = this.coursesService
      ._fetchCustomizeExistCoursePrice(id)
      .subscribe(
        (fetchedValues) => {
          this.prices = fetchedValues;
          addMisc('coursePrices', this.prices);
        },
        () => {}
      );
    this.prices = getMisc().coursePrices;
  }
}
