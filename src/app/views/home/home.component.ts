import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Classroom, ICategory, Tutor } from 'src/app/models';
import { CoursesService, TutorsService } from 'src/app/_api';

@Component({
  selector: 'metutors-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  fetchMainServicesSub: Subscription;
  classroomsPrepSub: Subscription;
  classroomsLangSub: Subscription;
  getFeaturedTutorsSub: Subscription;
  categories: ICategory[] = [];
  classroomsPrep: Classroom[] = [];
  classroomsLang: Classroom[] = [];
  teachers: Tutor[] = [];

  constructor(
    private title: Title,
    private coursesService: CoursesService,
    private tutorsService: TutorsService
  ) {
    this.title.setTitle('MEtutors');
  }

  ngOnInit(): void {
    this.fetchMainServicesSub = this.coursesService
      .fetchMainServices()
      .subscribe((response) => {
        this.categories = response.results;
      });

    this.classroomsPrepSub = this.coursesService
      .fetchClassroomsQuery({ homePage: '01' })
      .subscribe((response) => {
        this.classroomsPrep = response.classrooms;
      });

    this.classroomsLangSub = this.coursesService
      .fetchClassroomsQuery({ homePage: '02' })
      .subscribe((response) => {
        this.classroomsLang = response.classrooms;
      });

    this.getFeaturedTutorsSub = this.tutorsService
      .fetchFeaturedTutors()
      .subscribe(
        (fetchedTutors) => {
          this.teachers = fetchedTutors;
        },
        () => {}
      );
  }

  ngOnDestroy(): void {
    if (this.fetchMainServicesSub) this.fetchMainServicesSub.unsubscribe();
    if (this.classroomsPrepSub) this.classroomsPrepSub.unsubscribe();
    if (this.classroomsLangSub) this.classroomsLangSub.unsubscribe();
    if (this.getFeaturedTutorsSub) this.getFeaturedTutorsSub.unsubscribe();
  }
}
