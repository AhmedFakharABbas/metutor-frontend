import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Classroom } from 'src/app/models';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-classroom-layout',
  templateUrl: './classroom-layout.component.html',
  styleUrls: ['./classroom-layout.component.scss'],
})
export class ClassroomLayoutComponent implements OnInit, OnDestroy {
  id: number;
  classroom: Classroom;
  paramMap$: Subscription;
  classroomSub: Subscription;
  loadingClassroom: boolean;

  constructor(
    private _route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.paramMap$ = this._route.firstChild.paramMap.subscribe(
      (response: ParamMap) => {
        this.id = +response.get('id');

        this.loadingClassroom = true;
        this.classroomSub = this.coursesService
          .getClassroomById(this.id)
          .subscribe(
            (response) => {
              this.loadingClassroom = false;
              this.classroom = response;
            },
            (error) => {
              this.loadingClassroom = false;
            }
          );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.paramMap$) this.paramMap$.unsubscribe();
    if (this.classroomSub) this.classroomSub.unsubscribe();
  }
}
