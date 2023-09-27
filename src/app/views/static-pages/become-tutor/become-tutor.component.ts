import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Statistics } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-become-tutor',
  templateUrl: './become-tutor.component.html',
  styleUrls: ['./become-tutor.component.scss'],
})
export class BecomeTutorComponent implements OnInit, OnDestroy {
  getBecomeTutorsSub: Subscription;
  getTutorStatisticsSub: Subscription;
  getOpportunitiesSub: Subscription;
  getRequestCoursesListSub: Subscription;
  getWhyTeachingUsSub: Subscription;
  becomeTutors: any;
  tutorStatistics: Statistics[];
  opportunities = [];
  requestCoursesList: any[] = [];
  selectedCourse: any;
  step: string;
  whyTeachingUsList: any[] = [];

  constructor(private title: Title, private miscService: MiscService) {
    this.title.setTitle('Become A Tutor');
  }

  ngOnInit(): void {
    this.getBecomeTutorsSub = this.miscService.fetchBecomeTutors().subscribe(
      (fetchedValues) => {
        this.becomeTutors = fetchedValues;
        addMisc('becomeTutors', this.becomeTutors);
      },
      () => {}
    );
    this.becomeTutors = getMisc().becomeTutors;

    this.getTutorStatisticsSub = this.miscService
      .fetchTutorStatistics()
      .subscribe(
        (fetchedTutor) => {
          this.tutorStatistics = fetchedTutor;
          addMisc('tutorStatistics', this.tutorStatistics);
        },
        () => {}
      );
    this.tutorStatistics = getMisc().tutorStatistics;

    this.getOpportunitiesSub = this.miscService.fetchOpportunities().subscribe(
      (fetchedOpportunities) => {
        this.opportunities = fetchedOpportunities.results;
        addMisc('opportunities', this.opportunities);
      },
      () => {}
    );
    this.opportunities = getMisc().opportunities;

    this.getRequestCoursesListSub = this.miscService
      .fetchRequestCoursesList()
      .subscribe(
        (fetchedValues) => {
          this.requestCoursesList = fetchedValues.results;
          if (this.requestCoursesList && this.requestCoursesList.length) {
            this.selectedCourse = this.requestCoursesList[0];
            this.step = 'STEP' + this.selectedCourse?.id;
          }
          addMisc('requestCoursesList', this.requestCoursesList);
        },
        () => {}
      );
    this.requestCoursesList = getMisc().requestCoursesList;

    this.getWhyTeachingUsSub = this.miscService.fetchWhyTeachingUs().subscribe(
      (fetchedValues) => {
        this.whyTeachingUsList = fetchedValues.results;
        addMisc('whyTeachingUsList', this.whyTeachingUsList);
      },
      () => {}
    );
    this.whyTeachingUsList = getMisc().whyTeachingUsList;
  }

  ngOnDestroy(): void {
    if (this.getBecomeTutorsSub) this.getBecomeTutorsSub.unsubscribe();
    if (this.getTutorStatisticsSub) this.getTutorStatisticsSub.unsubscribe();
    if (this.getOpportunitiesSub) this.getOpportunitiesSub.unsubscribe();
    if (this.getRequestCoursesListSub)
      this.getRequestCoursesListSub.unsubscribe();
    if (this.getWhyTeachingUsSub) this.getWhyTeachingUsSub.unsubscribe();
  }
}
