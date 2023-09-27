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
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import { TuitionType } from 'src/app/config';

@Component({
  selector: 'metutors-course-details-popup',
  template: '',
})
export class CourseDetailsPopupComponent implements OnInit, OnChanges {
  @Input('openCourseDetailsPopop') openCourseDetailsPopop: boolean;
  @Input('course') course: any;
  @Output() closeDialog = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.openCourseDetailsPopop &&
      changes.openCourseDetailsPopop?.currentValue
    ) {
      const dialogRef = this.dialog.open(DialogCourseDetailsPopup, {
        width: '1000px',
        data: this.course,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.closeDialog.emit(false);
      });
    }
  }
}

@Component({
  selector: 'course-details-popup',
  templateUrl: './course-details-popup.component.html',
  styleUrls: ['./course-details-popup.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class DialogCourseDetailsPopup implements OnInit, OnDestroy {
  course: any;
  listVideos = [];
  openVideo: boolean = false;
  selectedVideo: number;
  tuitionType = TuitionType;

  constructor(
    public dialogRef: MatDialogRef<DialogCourseDetailsPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.course = data;
    }
  }

  ngOnInit(): void {
    this.listVideos = [
      {
        id: 1,
        title: 'Course introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our courses varies depending on the type and duration of the course. Please click here for a complete list of course prices',
      },
      {
        id: 2,
        title: 'Course introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our courses varies depending on the type and duration of the course. Please click here for a complete list of course prices',
      },
      {
        id: 3,
        title: 'Course introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our courses varies depending on the type and duration of the course. Please click here for a complete list of course prices',
      },
      {
        id: 4,
        title: 'Course introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our courses varies depending on the type and duration of the course. Please click here for a complete list of course prices',
      },
      {
        id: 5,
        title: 'Course introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our courses varies depending on the type and duration of the course. Please click here for a complete list of course prices',
      },
    ];
  }

  changeOpenSelection(id: number) {
    if (this.selectedVideo === id) {
      this.openVideo = false;
      this.selectedVideo = null;
    } else {
      this.openVideo = true;
      this.selectedVideo = id;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {}
}
