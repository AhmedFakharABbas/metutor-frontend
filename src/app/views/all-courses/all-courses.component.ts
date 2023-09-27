import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models';
import { AlertNotificationService } from 'src/app/shared';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit, OnDestroy {
  allCourses: Course[] = [];
  count: number = 0;
  filterForm: FormGroup;
  filterServicesSub: Subscription;
  categoryId: number;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    private alertNotificationService: AlertNotificationService
  ) {
    this.title.setTitle('All courses');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      this.categoryId = +res.get('categoryId');
      this.filterServicesSub = this.coursesService
        .filterServices({ categoryId: this.categoryId })
        .subscribe((response) => {
          this.allCourses = response.courses;
          this.count = response.count;
        });
    });

    this.filterForm = this.formBuilder.group({
      key: [null],
      rate: [null],
      tags: [null],
      startIn: [null],
      tutoringType: [null],
      sort: [null],
    });
  }

  onFilter(value): void {
    const query = {
      categoryId: this.categoryId,
      ...value,
    };
    this.filterServicesSub = this.coursesService
      .filterServices(query)
      .subscribe(
        (response) => {
          this.allCourses = response.courses;
          this.count = response.count;
        },
        (error) => {
          this.alertNotificationService.error('Error in fetching courses');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.filterServicesSub) this.filterServicesSub.unsubscribe();
  }
}
