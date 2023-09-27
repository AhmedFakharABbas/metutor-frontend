import { Component, Input, OnInit } from '@angular/core';
import { ClassroomType } from 'src/app/config';
import { Classroom } from 'src/app/models';

@Component({
  selector: 'metutors-classroom-item-horizental',
  templateUrl: './classroom-item-horizental.component.html',
  styleUrls: ['./classroom-item-horizental.component.scss'],
})
export class ClassroomItemHorizentalComponent implements OnInit {
  @Input() classroom: Classroom;
  openClassroomDetailsPopop = false;
  classroomType = ClassroomType;

  constructor() {}

  ngOnInit(): void {}
}
