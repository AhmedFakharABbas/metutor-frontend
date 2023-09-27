import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import { Course } from 'src/app/models';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  COURSE_FILTER_START_CONST,
  COURSE_FILTER_TAGS_CONST,
  COURSE_FILTER_TYPE_CONST,
} from 'src/app/config';

@Component({
  selector: 'metutors-available-courses',
  templateUrl: './available-courses.component.html',
  styleUrls: ['./available-courses.component.scss'],
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
export class AvailableCoursesComponent implements OnInit {
  @Input() courses: Course[];
  @Input() count: number;
  @Input() filterForm: FormGroup;
  @Output() submitFilters = new EventEmitter();

  isFiltered = false;
  filterTags = COURSE_FILTER_TAGS_CONST;
  filterStart = COURSE_FILTER_START_CONST;
  filterType = COURSE_FILTER_TYPE_CONST;

  constructor() {}

  ngOnInit(): void {}

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

  resetValue(item: AbstractControl): void {
    item?.setValue(null);
    this.submitFilters.emit(this.filterForm.value);
  }

  pageChanged(event): void {
    window.scrollTo(0, 0);
    this.submitFilters.emit({ ...this.filterForm.value, page: event.page });
  }
}
