import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Classroom } from 'src/app/models';
import { calculateDurationTime } from 'src/app/utils';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.scss'],
})
export class ClassesDashboardComponent implements OnInit, OnDestroy {
  classsroomId: number;
  classroom: Classroom;
  classroomSub: Subscription;
  openClassroomAttendancesPopop = false;
  openLeaveFeedbackPopop = false;

  loadingClassroom: boolean;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      this.classsroomId = +res.get('id');
      this.loadingClassroom = true;
      this.classroomSub = this.coursesService
        .getClassroomById(this.classsroomId)
        .subscribe(
          (response) => {
            this.classroom = response;
            this.loadingClassroom = false;
            this.title.setTitle(this.classroom?.name);
          },
          (error) => {
            this.loadingClassroom = false;
          }
        );
    });
  }

  calculateDurationTime(startTime: string, endTime: string): number {
    return calculateDurationTime(startTime, endTime);
  }

  ngOnDestroy(): void {
    if (this.classroomSub) this.classroomSub.unsubscribe();
  }
}
