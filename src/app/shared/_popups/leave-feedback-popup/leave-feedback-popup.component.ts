import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService, TutorsService } from 'src/app/_api';
import { Classroom } from 'src/app/models';
import { AlertNotificationService } from '../../alert-notifications/alert.service';

@Component({
  selector: 'metutors-leave-feedback-popup',
  template: '',
})
export class LeaveFeedbackPopupComponent implements OnInit, OnChanges {
  @Input() openLeaveFeedbackPopop: boolean;
  @Input() classroom: Classroom;
  @Input() isStudentView: boolean;
  @Output() closeDialog = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.openLeaveFeedbackPopop &&
      changes.openLeaveFeedbackPopop?.currentValue
    ) {
      const dialogRef = this.dialog.open(DialogLeaveFeedbackPopup, {
        width: '1000px',
        data: { classroom: this.classroom, isStudentView: this.isStudentView },
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.closeDialog.emit(false);
      });
    }
  }
}

@Component({
  selector: 'leave-feedback-popup',
  templateUrl: './leave-feedback-popup.component.html',
  styleUrls: ['./leave-feedback-popup.component.scss'],
})
export class DialogLeaveFeedbackPopup implements OnInit, OnDestroy {
  tutorFeedbackForm: FormGroup;
  courseFeedbackForm: FormGroup;
  classroom: Classroom;
  isStudentView: boolean;
  isSendFeedback = false;

  constructor(
    public dialogRef: MatDialogRef<DialogLeaveFeedbackPopup>,
    private formBuilder: FormBuilder,
    private tutorService: TutorsService,
    private coursesService: CoursesService,
    private alertNotificationService: AlertNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.classroom = data.classroom;
      this.isStudentView = data.isStudentView;
    }
  }

  ngOnInit(): void {
    this.tutorFeedbackForm = this.formBuilder.group({
      expertSubject: [null, Validators.required],
      presentTopics: [null, Validators.required],
      skillfulStudents: [null, Validators.required],
      alwaysTime: [null, Validators.required],
      feedback: [null, Validators.required],
    });

    this.courseFeedbackForm = this.formBuilder.group({
      rate: [null, Validators.required],
      feedback: [null, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitTutorFeedback(tutorForm: FormGroup): void {
    if (tutorForm.valid) {
      this.isSendFeedback = true;
      this.tutorService
        .sendTutorFeedback({
          ...tutorForm.value,
          tutorId: this.classroom?.tutor?.id,
          classroomId: this.classroom?.id,
        })
        .subscribe(
          (response) => {
            this.isSendFeedback = false;
            this.alertNotificationService.success(
              'Your feedback has been sent successfully.'
            );
            this.tutorFeedbackForm.reset();
            this.onNoClick();
          },
          (error) => {
            this.isSendFeedback = false;
            this.alertNotificationService.error('Error in sending feedback');
          }
        );
    }
  }

  onSubmitCourseFeedback(courseForm: FormGroup): void {
    if (courseForm.valid) {
      this.isSendFeedback = true;
      this.coursesService
        .sendCourseFeedback({
          ...courseForm.value,
          classroomId: this.classroom?.id,
        })
        .subscribe(
          (response) => {
            this.isSendFeedback = false;
            this.alertNotificationService.success(
              'Your feedback has been sent successfully.'
            );
            this.tutorFeedbackForm.reset();
            this.onNoClick();
          },
          (error) => {
            this.isSendFeedback = false;
            this.alertNotificationService.error('Error in sending feedback');
          }
        );
    }
  }

  ngOnDestroy(): void {}
}
