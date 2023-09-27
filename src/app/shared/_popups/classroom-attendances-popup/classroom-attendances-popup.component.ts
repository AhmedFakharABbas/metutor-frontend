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

@Component({
  selector: 'metutors-classroom-attendances-popup',
  template: '',
})
export class ClassroomAttendancesPopupComponent implements OnInit, OnChanges {
  @Input('openClassroomAttendancesPopop')
  openClassroomAttendancesPopop: boolean;
  @Output() closeDialog = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.openClassroomAttendancesPopop &&
      changes.openClassroomAttendancesPopop?.currentValue
    ) {
      const dialogRef = this.dialog.open(DialogClassroomAttendancesPopup, {
        width: '1000px',
        data: null,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.closeDialog.emit(false);
      });
    }
  }
}

@Component({
  selector: 'classroom-attendances-popup',
  templateUrl: './classroom-attendances-popup.component.html',
  styleUrls: ['./classroom-attendances-popup.component.scss'],
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
export class DialogClassroomAttendancesPopup implements OnInit, OnDestroy {
  
  listVideos = [];
  openVideo: boolean = false;
  selectedVideo: number;

  constructor(
    public dialogRef: MatDialogRef<DialogClassroomAttendancesPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {}
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
