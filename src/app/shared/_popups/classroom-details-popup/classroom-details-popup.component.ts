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
  selector: 'metutors-classroom-details-popup',
  template: '',
})
export class ClassroomDetailsPopupComponent implements OnInit, OnChanges {
  @Input('openClassroomDetailsPopop') openClassroomDetailsPopop: boolean;
  @Input('classroom') classroom: any;
  @Output() closeDialog = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.openClassroomDetailsPopop &&
      changes.openClassroomDetailsPopop?.currentValue
    ) {
      const dialogRef = this.dialog.open(DialogClassroomDetailsPopup, {
        width: '1000px',
        data: this.classroom,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.closeDialog.emit(false);
      });
    }
  }
}

@Component({
  selector: 'classroom-details-popup',
  templateUrl: './classroom-details-popup.component.html',
  styleUrls: ['./classroom-details-popup.component.scss'],
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
export class DialogClassroomDetailsPopup implements OnInit, OnDestroy {
  classroom: any;
  listVideos = [];
  openVideo: boolean = false;
  selectedVideo: number;

  constructor(
    public dialogRef: MatDialogRef<DialogClassroomDetailsPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.classroom = data;
    }
  }

  ngOnInit(): void {
    this.listVideos = [
      {
        id: 1,
        title: 'Classroom introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our classrooms varies depending on the type and duration of the classroom. Please click here for a complete list of classroom prices',
      },
      {
        id: 2,
        title: 'Classroom introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our classrooms varies depending on the type and duration of the classroom. Please click here for a complete list of classroom prices',
      },
      {
        id: 3,
        title: 'Classroom introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our classrooms varies depending on the type and duration of the classroom. Please click here for a complete list of classroom prices',
      },
      {
        id: 4,
        title: 'Classroom introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our classrooms varies depending on the type and duration of the classroom. Please click here for a complete list of classroom prices',
      },
      {
        id: 5,
        title: 'Classroom introduction',
        totalClasses: 4,
        duration: '50 Min',
        details:
          'The cost of our classrooms varies depending on the type and duration of the classroom. Please click here for a complete list of classroom prices',
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
