import { Component, Input, OnInit } from '@angular/core';
import { TuitionType } from 'src/app/config';
import { Course } from 'src/app/models';

@Component({
  selector: 'metutors-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() course: Course;
  tuitionType = TuitionType;

  constructor() {}

  ngOnInit(): void {}
}
