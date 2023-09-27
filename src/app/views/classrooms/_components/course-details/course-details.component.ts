import { Component, Input, OnInit } from '@angular/core';
import { COURSE_TAGS_CONST } from 'src/app/config';
import { Course } from 'src/app/models';

@Component({
  selector: 'metutors-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  @Input() course: Course;
  @Input() isLoading: boolean;

  courseTags = COURSE_TAGS_CONST;

  constructor() {}

  ngOnInit(): void {}
}
