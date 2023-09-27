import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-request-post-course',
  templateUrl: './request-post-course.component.html',
  styleUrls: ['./request-post-course.component.scss'],
})
export class RequestPostCourseComponent implements OnInit {
  @Input() requestCoursesList: any[] = [];
  @Input() selectedCourse: any;
  @Input() step: string;

  constructor() {}

  ngOnInit(): void {}
}
