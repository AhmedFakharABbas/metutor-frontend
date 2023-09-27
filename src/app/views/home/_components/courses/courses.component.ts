import { Component, Input, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models';

@Component({
  selector: 'metutors-home-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class HomeCoursesComponent implements OnInit {
  @Input() classroomsPrep: Classroom[] = [];
  @Input() classroomsLang: Classroom[] = [];

  constructor() {}

  ngOnInit(): void {}
}
