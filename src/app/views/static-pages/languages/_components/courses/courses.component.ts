import { Component, Input, OnInit } from '@angular/core';
import { Course, ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-languages-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class LanguagesCoursesComponent implements OnInit {
  @Input() courses: Course[];
  @Input() category: ICategory;

  constructor() {}

  ngOnInit(): void {}
}
