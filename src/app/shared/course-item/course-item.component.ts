import { Component, Input, OnInit } from '@angular/core';
import { COURSE_TAGS_CONST, TuitionType } from 'src/app/config';
import { Classroom } from 'src/app/models';

@Component({
  selector: 'metutors-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() classroom: Classroom;
  tuitionType = TuitionType;
  courseTags = COURSE_TAGS_CONST;

  constructor() {}

  ngOnInit(): void {}
}
