import { Component, Input, OnInit } from '@angular/core';
import { ClassroomType } from 'src/app/config';
import { Classroom } from 'src/app/models';
import { calculateDurationTime } from 'src/app/utils';

@Component({
  selector: 'metutors-classroom-item',
  templateUrl: './classroom-item.component.html',
  styleUrls: ['./classroom-item.component.scss'],
})
export class ClassroomItemComponent implements OnInit {
  @Input() classroom: Classroom;
  openClassroomDetailsPopop = false;
  classroomType = ClassroomType;

  constructor() {}

  ngOnInit(): void {}

  calculateDurationTime(startTime: string, endTime: string): number {
    return calculateDurationTime(startTime, endTime);
  }
}
