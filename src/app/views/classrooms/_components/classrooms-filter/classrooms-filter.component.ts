import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  COURSE_FILTER_TYPE_CONST,
  COURSE_FILTER_START_CONST,
} from 'src/app/config';
import { LONG_DAYS_WEEK } from 'src/app/utils';

@Component({
  selector: 'metutors-classrooms-filter',
  templateUrl: './classrooms-filter.component.html',
  styleUrls: ['./classrooms-filter.component.scss'],
})
export class ClassroomsFilterComponent implements OnInit {
  @Input() filterForm: FormGroup;
  @Output() closeFilter = new EventEmitter<boolean>();
  @Output() submitFilters = new EventEmitter();

  filterType = COURSE_FILTER_TYPE_CONST;
  filterStart = COURSE_FILTER_START_CONST;
  listDays = LONG_DAYS_WEEK;
  filterCount = 0;

  constructor() {}

  ngOnInit(): void {
    this.checkCountFilter();
  }

  get maxStudents(): AbstractControl | null {
    return this.filterForm.get('maxStudents');
  }

  get days(): AbstractControl | null {
    return this.filterForm.get('days');
  }

  get startIn(): AbstractControl | null {
    return this.filterForm.get('startIn');
  }

  get type(): AbstractControl | null {
    return this.filterForm.get('type');
  }

  returnZero(): number {
    return 0;
  }

  checkCountFilter(): void {
    this.filterCount = 0;
    if (this.maxStudents?.value) {
      this.filterCount += 1;
    }
    if (this.days?.value) {
      this.filterCount += 1;
    }
    if (this.startIn?.value) {
      this.filterCount += 1;
    }
    if (this.type?.value) {
      this.filterCount += 1;
    }
  }

  onCancel(): void {
    this.filterForm.reset();
    this.closeFilter.emit(false);
    this.submitFilters.emit(this.filterForm.value);
  }
}
