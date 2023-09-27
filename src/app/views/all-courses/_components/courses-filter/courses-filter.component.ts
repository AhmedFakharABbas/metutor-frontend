import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  COURSE_FILTER_TAGS_CONST,
  COURSE_FILTER_START_CONST,
  COURSE_FILTER_TYPE_CONST,
} from 'src/app/config';

@Component({
  selector: 'metutors-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.scss'],
})
export class CoursesFilterComponent implements OnInit {
  @Input() filterForm: FormGroup;
  @Output() closeFilter = new EventEmitter<boolean>();
  @Output() submitFilters = new EventEmitter();

  filterTags = COURSE_FILTER_TAGS_CONST;
  filterStart = COURSE_FILTER_START_CONST;
  filterType = COURSE_FILTER_TYPE_CONST;
  filterCount = 0;

  constructor() {}

  ngOnInit(): void {
    this.checkCountFilter();
  }

  returnZero(): number {
    return 0;
  }

  get rate(): AbstractControl | null {
    return this.filterForm.get('rate');
  }

  get tags(): AbstractControl | null {
    return this.filterForm.get('tags');
  }

  get startIn(): AbstractControl | null {
    return this.filterForm.get('startIn');
  }

  get tutoringType(): AbstractControl | null {
    return this.filterForm.get('tutoringType');
  }

  checkCountFilter(): void {
    this.filterCount = 0;
    if (this.rate?.value) {
      this.filterCount += 1;
    }
    if (this.tags?.value) {
      this.filterCount += 1;
    }
    if (this.startIn?.value) {
      this.filterCount += 1;
    }
    if (this.tutoringType?.value) {
      this.filterCount += 1;
    }
  }

  onCancel(): void {
    this.filterForm.reset();
    this.closeFilter.emit(false);
    this.submitFilters.emit(this.filterForm.value);
  }
}
