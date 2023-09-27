import { Component, Input, OnInit } from '@angular/core';
import { Course, ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-prep-college-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class PrepCollegeCoursesComponent implements OnInit {
  @Input() courses: Course[];
  @Input() category: ICategory;

  constructor() {}

  ngOnInit(): void {}
}
