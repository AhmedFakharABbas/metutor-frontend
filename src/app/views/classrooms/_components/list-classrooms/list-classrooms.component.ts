import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import {
  COURSE_FILTER_START_CONST,
  COURSE_FILTER_TYPE_CONST,
} from 'src/app/config';
import { Classroom } from 'src/app/models';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LONG_DAYS_WEEK } from 'src/app/utils';

@Component({
  selector: 'metutors-list-classrooms',
  templateUrl: './list-classrooms.component.html',
  styleUrls: ['./list-classrooms.component.scss'],
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
export class ListClassroomsComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() classrooms: Classroom[];
  @Input() count: number;
  @Input() filterForm: FormGroup;
  @Output() submitFilters = new EventEmitter();
  isFiltered = false;
  filterStart = COURSE_FILTER_START_CONST;
  filterType = COURSE_FILTER_TYPE_CONST;
  listDays = LONG_DAYS_WEEK;

  constructor() {}

  ngOnInit(): void {}

  pageChanged(event): void {
    window.scrollTo(0, 0);
    this.submitFilters.emit({ ...this.filterForm.value, page: event.page });
  }

  get startIn(): AbstractControl | null {
    return this.filterForm.get('startIn');
  }

  get days(): AbstractControl | null {
    return this.filterForm.get('days');
  }

  get type(): AbstractControl | null {
    return this.filterForm.get('type');
  }

  get maxStudents(): AbstractControl | null {
    return this.filterForm.get('maxStudents');
  }

  resetValue(item: AbstractControl): void {
    item?.setValue(null);
    this.submitFilters.emit(this.filterForm.value);
  }
}
