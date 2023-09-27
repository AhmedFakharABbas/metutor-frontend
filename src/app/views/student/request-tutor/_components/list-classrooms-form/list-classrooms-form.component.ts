import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { IClass } from 'src/app/models';
import { calculateDurationTime, LONG_DAYS_WEEK } from 'src/app/utils';

@Component({
  selector: 'metutors-list-classrooms-form',
  templateUrl: './list-classrooms-form.component.html',
  styleUrls: ['./list-classrooms-form.component.scss'],
})
export class ListClassroomsFormComponent implements OnInit, OnChanges {
  @Input() form: FormGroup;
  @Input() classrooms: IClass[];
  @Input() loading: boolean;
  @Output() onBack = new EventEmitter();
  @Output() onNext = new EventEmitter();
  @Output() loadTutors = new EventEmitter<IClass[]>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.classrooms?.currentValue) {
      this.classes.setValue(this.classrooms);
    }
  }

  get classes(): AbstractControl | null {
    return this.form.get('classes');
  }

  deleteClassroom(id: string): void {
    const dialogRef = this.dialog.open(DialogRemoveClassroom, {
      width: '500px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.classrooms.forEach((classroom, index) => {
          if (classroom?.number === result) {
            this.classrooms.splice(index, 1);
            this.classes.setValue(this.classrooms);
          }
        });
      }
    });
  }

  editClassroom(classroom: IClass): void {
    const dialogRef = this.dialog.open(DialogEditClassroom, {
      width: '800px',
      data: { classroom },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.classrooms.forEach((classroom, index) => {
          if (classroom?.number === result?.number) {
            this.classrooms[index] = result;
            this.classes.setValue(this.classrooms);
          }
        });
      }
    });

    const dialogSubmitSubscription = dialogRef.componentInstance.updatedClassroom.subscribe(
      (result) => {
        if (result) {
          this.classrooms.forEach((classroom, index) => {
            if (classroom?.number === result?.number) {
              this.classrooms[index] = result;
              this.classes.setValue(this.classrooms);
            }
            dialogSubmitSubscription.unsubscribe();
          });
        }
      }
    );
  }
}

@Component({
  selector: 'dialog-confirm-delete-classroom',
  templateUrl: 'dialog-confirm-delete-classroom.component.html',
  styles: [
    `
      .confirm-delete h2 {
        font-size: 20px;
        font-weight: bold;
      }
      .confirm-delete p {
        color: #696969;
        font-size: 18px;
      }
      .confirm-delete .btn-confirm {
        background-color: #ff554b;
        color: #fff;
        font-weight: bold;
        padding: 0 20px;
      }
    `,
  ],
})
export class DialogRemoveClassroom {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveClassroom>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-confirm-edit-classroom',
  templateUrl: 'dialog-confirm-edit-classroom.component.html',
  styleUrls: ['./list-classrooms-form.component.scss'],
  providers: [DatePipe],
})
export class DialogEditClassroom implements OnInit {
  @Output() updatedClassroom = new EventEmitter<IClass>();
  editForm: FormGroup;
  listDays = LONG_DAYS_WEEK;
  minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<DialogEditClassroom>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.editForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      days: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      duration: [{ value: 0, disabled: true }, Validators.required],
      tempDuration: [0, Validators.required],
      number: [0],
    });

    if (data) {
      const classroom = data.classroom;
      this.editForm.patchValue({
        number: classroom.number,
        startDate: classroom.date,
        days: this.datePipe.transform(new Date(classroom.date), 'EEEE'),
        startTime: new Date('01-01-2017 ' + classroom.startTime + ':00'),
        endTime: new Date('01-01-2017 ' + classroom.endTime + ':00'),
        duration: classroom.duration,
        tempDuration: classroom.duration,
      });
    }
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get days(): AbstractControl | null {
    return this.editForm.get('days');
  }

  get startDate(): AbstractControl | null {
    return this.editForm.get('startDate');
  }

  get startTime(): AbstractControl | null {
    return this.editForm.get('startTime');
  }

  get endTime(): AbstractControl | null {
    return this.editForm.get('endTime');
  }

  get duration(): AbstractControl | null {
    return this.editForm.get('duration');
  }

  get tempDuration(): AbstractControl | null {
    return this.editForm.get('tempDuration');
  }

  onCloseCalendar(): void {
    if (this.startTime?.value && this.endTime?.value) {
      const duration = calculateDurationTime(
        this.startTime.value,
        this.endTime.value
      );
      this.duration.setValue(duration);
      this.tempDuration.setValue(duration);
      return;
    }

    this.duration.setValue(0);
    this.tempDuration.setValue(0);
  }

  onChangeDate(): void {
    if (this.startDate.value) {
      this.days.setValue(
        this.datePipe.transform(new Date(this.startDate.value), 'EEEE')
      );
    }
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const value = {
        id: form.value.id,
        number: form.value.number,
        title: form.value.title,
        subject: '',
        attendees: form.value.attendees,
        date: form.value.startDate,
        startTime: this.datePipe.transform(
          new Date(form.value.startTime),
          'HH:mm'
        ),
        endTime: this.datePipe.transform(new Date(form.value.endTime), 'HH:mm'),
        duration: form.value.tempDuration,
      };
      this.updatedClassroom.emit(value);
      this.dialogRef.close();
    }
  }
}
