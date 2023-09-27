import { Component, Input, OnInit } from '@angular/core';
import { COURSE_TAGS_CONST, TuitionType } from 'src/app/config';
import { Course } from 'src/app/models';

@Component({
  selector: 'metutors-course-item-horizental',
  templateUrl: './course-item-horizental.component.html',
  styleUrls: ['./course-item-horizental.component.scss'],
})
export class CourseItemHorizentalComponent implements OnInit {
  @Input() course: Course;
  openCourseDetailsPopop = false;
  courseTags = COURSE_TAGS_CONST;
  tuitionType = TuitionType;

  constructor() {}

  ngOnInit(): void {}
}
