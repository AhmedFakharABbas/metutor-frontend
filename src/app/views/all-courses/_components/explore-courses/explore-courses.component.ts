import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'metutors-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss'],
})
export class ExploreCoursesComponent implements OnInit {
  @Input() filterForm: FormGroup;
  @Output() submitFilters = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submit(form: FormGroup): void {
    if (form.valid) this.submitFilters.emit(form.value);
  }
}
