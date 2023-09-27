import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Classroom } from 'src/app/models';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss'],
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
export class ClassroomComponent implements OnInit {
  openActive = true;
  openCompleted = true;
  activeClassrooms: Classroom[] = [];
  completedClassrooms: Classroom[] = [];
  isLoading: boolean;

  constructor(private courseService: CoursesService, private title: Title) {
    this.title.setTitle('Classrooms - Student');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.fetchMyClassrooms().subscribe(
      (response) => {
        this.isLoading = false;
        if (response && response.length) {
          this.activeClassrooms = response.filter(
            (classroom) => classroom?.isComplete === false
          );

          this.completedClassrooms = response.filter(
            (classroom) => classroom?.isComplete === true
          );
        }
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
