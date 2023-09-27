import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Classroom, Course } from 'src/app/models';
import { AlertNotificationService } from 'src/app/shared';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit, OnDestroy {
  fetchClassroomsSub: Subscription;
  fetchCourseSub: Subscription;
  filterClassroomsSub: Subscription;
  course: Course;
  filterForm: FormGroup;
  classrooms: Classroom[] = [];
  count: number = 0;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    private alertNotificationService: AlertNotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      const id = +res.get('id');

      this.fetchCourseSub = this.coursesService.getCourseById(id).subscribe(
        (response) => {
          this.course = response;
          this.title.setTitle(this.course?.name);
        },
        (error) => {}
      );

      this.isLoading = true;
      this.fetchClassroomsSub = this.coursesService
        .fetchClassroomsQuery({ course: id, status: '01' })
        .subscribe(
          (response) => {
            this.isLoading = false;
            this.classrooms = response.classrooms;
            this.count = response.count;
          },
          (error) => {
            this.isLoading = false;
          }
        );
    });

    this.filterForm = this.formBuilder.group({
      startTime: [null],
      endTime: [null],
      maxStudents: [null],
      startIn: [null],
      days: [null],
      sort: [null],
      type: [null],
      page: [null],
    });
  }

  onFilter(query): void {
    this.isLoading = true;
    this.filterClassroomsSub = this.coursesService
      .filterClassooms(query)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.classrooms = response.classrooms;
          this.count = response.count;
        },
        (error) => {
          this.isLoading = false;
          this.alertNotificationService.error('Error in fetching classrooms');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.fetchCourseSub) this.fetchCourseSub.unsubscribe();
    if (this.fetchClassroomsSub) this.fetchClassroomsSub.unsubscribe();
    if (this.filterClassroomsSub) this.filterClassroomsSub.unsubscribe();
  }
}
