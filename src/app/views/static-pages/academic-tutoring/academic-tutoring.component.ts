import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Statistics } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-academic-tutoring',
  templateUrl: './academic-tutoring.component.html',
  styleUrls: ['./academic-tutoring.component.scss'],
})
export class AcademicTutoringComponent implements OnInit, OnDestroy {
  getFetchAcademicTutoringBenefitsSub: Subscription;
  getAcademicTutoringStatisticsSub: Subscription;
  getFeaturedTestmonialsSub: Subscription;
  academicTutoringBenefits: any;
  academicStatistics: Statistics[];
  testmonials = [];

  constructor(private title: Title, private miscService: MiscService) {
    this.title.setTitle('Academic Tutoring');
  }

  ngOnInit(): void {
    this.getFetchAcademicTutoringBenefitsSub = this.miscService
      .fetchAcademicTutoringBenefits()
      .subscribe(
        (response) => {
          this.academicTutoringBenefits = response.results;
          addMisc('academicTutoringBenefits', this.academicTutoringBenefits);
        },
        () => {}
      );
    this.academicTutoringBenefits = getMisc().academicTutoringBenefits;

    this.getAcademicTutoringStatisticsSub = this.miscService
      .fetchAcademicTutoringStatistics()
      .subscribe(
        (fetchedTutor) => {
          this.academicStatistics = fetchedTutor;
          addMisc('academicStatistics', this.academicStatistics);
        },
        () => {}
      );
    this.academicStatistics = getMisc().academicStatistics;

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
    if (this.getFetchAcademicTutoringBenefitsSub)
      this.getFetchAcademicTutoringBenefitsSub.unsubscribe();
    if (this.getAcademicTutoringStatisticsSub)
      this.getAcademicTutoringStatisticsSub.unsubscribe();
    if (this.getFeaturedTestmonialsSub)
      this.getFeaturedTestmonialsSub.unsubscribe();
  }
}
