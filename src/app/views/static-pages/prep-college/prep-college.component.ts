import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Course, ICategory } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { CoursesService, MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-prep-college',
  templateUrl: './prep-college.component.html',
  styleUrls: ['./prep-college.component.scss'],
})
export class PrepCollegeComponent implements OnInit {
  fetchServiceSub: Subscription;
  getFetchPrepCollageIntroducingSub: Subscription;
  categoryCoursesSub: Subscription;
  getFeaturedTestmonialsSub: Subscription;
  category: ICategory;
  prepCollageIntro: any;
  categoryCourses: Course[];
  testmonials = [];

  constructor(
    private title: Title,
    private coursesService: CoursesService,
    private miscService: MiscService
  ) {
    this.title.setTitle('Prep college');
  }

  ngOnInit(): void {
    this.fetchServiceSub = this.coursesService
      .fetchService(1)
      .subscribe((response) => {
        this.category = response;
        this.title.setTitle(this.category.name);
      });

    this.getFetchPrepCollageIntroducingSub = this.miscService
      .fetchPrepCollageIntroducing()
      .subscribe(
        (response) => {
          this.prepCollageIntro = response.results;
          addMisc('prepCollageIntro', this.prepCollageIntro);
        },
        () => {}
      );

    this.prepCollageIntro = getMisc().prepCollageIntro;

    this.categoryCoursesSub = this.coursesService
      .fetchCategoryCourses(1)
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
    if (this.getFetchPrepCollageIntroducingSub)
      this.getFetchPrepCollageIntroducingSub.unsubscribe();
    if (this.categoryCoursesSub) this.categoryCoursesSub.unsubscribe();
    if (this.getFeaturedTestmonialsSub)
      this.getFeaturedTestmonialsSub.unsubscribe();
  }
}
