import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CLASSROOM_TYPES_CONST } from 'src/app/config';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import {
  calculateDurationTime,
  calculateListDays,
  LONG_DAYS_WEEK,
  SORTED_DAYS_WEEK,
} from 'src/app/utils';

@Component({
  selector: 'ureed-classroom-info-form',
  templateUrl: './classroom-info-form.component.html',
  styleUrls: ['./classroom-info-form.component.scss'],
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
export class ClassroomInfoFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() prices: any;
  @Output() onBack = new EventEmitter();
  @Output() submitForm = new EventEmitter<FormGroup>();

  listDays = LONG_DAYS_WEEK;
  daysSorted = SORTED_DAYS_WEEK;
  types = CLASSROOM_TYPES_CONST;
  minDate = new Date();
  price = 0;
  showSeatAttendees = false;

  constructor() {}

  ngOnInit(): void {}

  get startTime(): AbstractControl | null {
    return this.form.get('startTime');
  }

  get endTime(): AbstractControl | null {
    return this.form.get('endTime');
  }

  get startDate(): AbstractControl | null {
    return this.form.get('startDate');
  }

  get endDate(): AbstractControl | null {
    return this.form.get('endDate');
  }

  get duration(): AbstractControl | null {
    return this.form.get('duration');
  }

  get tempDuration(): AbstractControl | null {
    return this.form.get('tempDuration');
  }

  get days(): AbstractControl | null {
    return this.form.get('days');
  }

  get totalClasses(): AbstractControl | null {
    return this.form.get('totalClasses');
  }

  get tempTotalClasses(): AbstractControl | null {
    return this.form.get('tempTotalClasses');
  }

  get hours(): AbstractControl | null {
    return this.form.get('hours');
  }

  get tempHours(): AbstractControl | null {
    return this.form.get('tempHours');
  }

  get type(): AbstractControl | null {
    return this.form.get('type');
  }

  get seatAttendees(): AbstractControl | null {
    return this.form.get('seatAttendees');
  }

  onSubmit(form: FormGroup): void {
    this.submitForm.emit(form);
  }

  returnZero(): number {
    return 0;
  }

  onChangeDateDay(): void {
    if (this.startDate?.value && this.endDate?.value) {
      if (this.endDate.value < this.startDate.value) {
        this.endDate.setValue(null);
      }
    }

    if (
      this.startDate?.value &&
      this.endDate?.value &&
      this.days?.value &&
      this.days?.value.length
    ) {
      const daysCalculated = calculateListDays(
        this.startDate?.value,
        this.endDate?.value
      );

      let repeated = 0;
      daysCalculated.forEach((day) => {
        if (
          this.days?.value.includes(this.daysSorted[new Date(day).getDay()])
        ) {
          repeated = repeated + 1;
        }
      });

      this.totalClasses?.setValue(repeated);
      this.tempTotalClasses?.setValue(repeated);
      this.hours.setValue(
        +(+this.tempDuration.value * +this.tempTotalClasses.value).toFixed(2)
      );
      this.tempHours.setValue(
        +(+this.tempDuration.value * +this.tempTotalClasses.value).toFixed(2)
      );
      this.onChangeType();
      return;
    }

    this.totalClasses.setValue(0);
    this.tempTotalClasses.setValue(0);
    this.hours.setValue(0);
    this.tempHours.setValue(0);
    this.onChangeType();
  }

  onChangeDate(): void {
    this.days?.setValue(null);
  }

  onChangeType(): void {
    if (this.type.value && this.hours.value) {
      if (
        this.type.value.toString() ===
        Object.keys(CLASSROOM_TYPES_CONST)[0].toString()
      ) {
        this.price = +this.prices?.oneOnOne * +this.hours?.value;
        this.showSeatAttendees = false;
      } else {
        this.price = +this.prices?.groupStudy * +this.hours?.value;
        this.showSeatAttendees = true;
      }
    }
  }

  onCloseCalendar(): void {
    if (this.startTime?.value && this.endTime?.value) {
      const duration = calculateDurationTime(
        this.startTime.value,
        this.endTime.value
      );
      this.duration.setValue(duration);
      this.tempDuration.setValue(duration);
      this.hours.setValue(
        +(+this.duration.value * +this.totalClasses.value).toFixed(2)
      );
      this.tempHours.setValue(
        +(+this.tempDuration.value * +this.tempTotalClasses.value).toFixed(2)
      );
      this.onChangeType();
      return;
    }

    this.duration.setValue(0);
    this.tempDuration.setValue(0);
    this.hours.setValue(0);
    this.tempHours.setValue(0);
    this.onChangeType();
  }

  checkDisabledDays(day: string): boolean {
    let isDisabled = true;

    if (this.startDate?.value && this.endDate?.value) {
      const daysCalculated = calculateListDays(
        this.startDate?.value,
        this.endDate?.value
      );

      daysCalculated.forEach((dayCalculated) => {
        if (
          this.daysSorted[new Date(dayCalculated).getDay()].toLowerCase() ===
          day.toLowerCase()
        ) {
          isDisabled = false;
        }
      });
    }

    return isDisabled;
  }
}
