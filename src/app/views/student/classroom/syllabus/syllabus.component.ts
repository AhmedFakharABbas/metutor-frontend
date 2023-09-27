import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from 'src/app/_api';
import { Subscription } from 'rxjs';
import { Classroom, Syllabus } from 'src/app/models';
import { calculateDurationTime } from 'src/app/utils';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'metutors-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class SyllabusComponent implements OnInit, OnDestroy {
  openCourse: boolean = false;
  selectedCourse: number;
  classsroomId: number;
  syllabusSub: Subscription;
  classroomSub: Subscription;
  classroom: Classroom;
  syllabuses: Syllabus[] = [];

  loadingClassroom: boolean;
  loadingSyllabus: boolean;

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
            this.loadingClassroom = false;
            this.classroom = response;
            this.title.setTitle(this.classroom?.name);
          },
          (error) => {
            this.loadingClassroom = false;
          }
        );

      this.loadingSyllabus = true;
      this.syllabusSub = this.coursesService
        .getSyllabusByCourseId(this.classsroomId)
        .subscribe(
          (response) => {
            this.syllabuses = response;
            this.loadingSyllabus = false;
          },
          (error) => {
            this.loadingSyllabus = false;
          }
        );
    });
  }

  calculateDurationTime(startTime: string, endTime: string): number {
    return calculateDurationTime(startTime, endTime);
  }

  changeOpenSelection(id: number): void {
    if (this.selectedCourse === id) {
      this.openCourse = false;
      this.selectedCourse = null;
    } else {
      this.openCourse = true;
      this.selectedCourse = id;
    }
  }

  ngOnDestroy(): void {
    if (this.classroomSub) this.classroomSub.unsubscribe();
    if (this.syllabusSub) this.syllabusSub.unsubscribe();
  }
}
