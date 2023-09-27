import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Course, ICategory } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { CoursesService, MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit, OnDestroy {
  fetchServiceSub: Subscription;
  getFetchLangCourseIntroductionSub: Subscription;
  categoryCoursesSub: Subscription;
  getFeaturedTestmonialsSub: Subscription;
  category: ICategory;
  langCourseIntro: any;
  categoryCourses: Course[];
  testmonials = [];

  constructor(
    private title: Title,
    private coursesService: CoursesService,
    private miscService: MiscService
  ) {
    this.title.setTitle('Languages');
  }

  ngOnInit(): void {
    this.fetchServiceSub = this.coursesService
      .fetchService(2)
      .subscribe((response) => {
        this.category = response;
        this.title.setTitle(this.category.name);
      });

    this.getFetchLangCourseIntroductionSub = this.miscService
      .fetchLangCourseIntroduction()
      .subscribe(
        (response) => {
          this.langCourseIntro = response.results;
          addMisc('langCourseIntro', this.langCourseIntro);
        },
        () => {}
      );

    this.langCourseIntro = getMisc().langCourseIntro;

    this.categoryCoursesSub = this.coursesService
      .fetchCategoryCourses(2)
      .subscribe((response) => {
        this.categoryCourses = response;
      });

    this.getFeaturedTestmonialsSub = this.miscService
      .fetchTestmonials()
      .subscribe(
        (fetchedTestmonials) => {
          this.testmonials = fetchedTestmonials.results;
          addMisc('testmonials', this.testmonials);
        },
        () => {}
      );
    this.testmonials = getMisc().testmonials;
  }

  ngOnDestroy(): void {
    if (this.fetchServiceSub) this.fetchServiceSub.unsubscribe();
    if (this.getFetchLangCourseIntroductionSub)
      this.getFetchLangCourseIntroductionSub.unsubscribe();
    if (this.categoryCoursesSub) this.categoryCoursesSub.unsubscribe();
    if (this.getFeaturedTestmonialsSub)
      this.getFeaturedTestmonialsSub.unsubscribe();
  }
}
