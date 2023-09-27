import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Statistics } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  getFoundersSub: Subscription;
  getInnovateApproachSub: Subscription;
  getValuesStatisticsSub: Subscription;
  getAboutStatisticsSub: Subscription;
  getWhyMeTutorsSub: Subscription;
  getWhyWeTeachSub: Subscription;
  founders: any[] = [];
  innovateApproach: any;
  valuesStatistics: any;
  aboutStatistics: Statistics[];
  whyMeTutorsList: any[] = [];
  whyWeTeach: any;

  constructor(private title: Title, private miscService: MiscService) {
    this.title.setTitle('About');
  }

  ngOnInit(): void {
    this.getFoundersSub = this.miscService.fetchFounders().subscribe(
      (response) => {
        this.founders = response.results;
        addMisc('founders', this.founders);
      },
      () => {}
    );
    this.founders = getMisc().founders;

    this.getInnovateApproachSub = this.miscService
      .fetchInnovateApproach()
      .subscribe(
        (response) => {
          this.innovateApproach =
            response.results && response.results.length
              ? response.results[0]
              : {};
          addMisc('innovateApproach', this.innovateApproach);
        },
        () => {}
      );
    this.innovateApproach = getMisc().innovateApproach;

    this.getValuesStatisticsSub = this.miscService
      .fetchValuesStatistics()
      .subscribe(
        (fetchedValues) => {
          this.valuesStatistics = fetchedValues;
          addMisc('valuesStatistics', this.valuesStatistics);
        },
        () => {}
      );
    this.valuesStatistics = getMisc().valuesStatistics;

    this.getAboutStatisticsSub = this.miscService
      .fetchAboutStatistics()
      .subscribe(
        (fetchedAbout) => {
          this.aboutStatistics = fetchedAbout;
          addMisc('aboutStatistics', this.aboutStatistics);
        },
        () => {}
      );
    this.aboutStatistics = getMisc().aboutStatistics;

    this.getWhyMeTutorsSub = this.miscService.fetchWhyMeTutors().subscribe(
      (fetchedValues) => {
        this.whyMeTutorsList = fetchedValues.results;
        addMisc('whyMeTutorsList', this.whyMeTutorsList);
      },
      () => {}
    );
    this.whyMeTutorsList = getMisc().whyMeTutorsList;

    this.getWhyWeTeachSub = this.miscService.fetchWhyWeTeach().subscribe(
      (fetchedValues) => {
        this.whyWeTeach =
          fetchedValues.results && fetchedValues.results.length
            ? fetchedValues.results[0]
            : {};
        addMisc('whyWeTeach', this.whyWeTeach);
      },
      () => {}
    );
    this.whyWeTeach = getMisc().whyWeTeach;
  }

  ngOnDestroy(): void {
    if (this.getFoundersSub) this.getFoundersSub.unsubscribe();
    if (this.getInnovateApproachSub) this.getInnovateApproachSub.unsubscribe();
    if (this.getValuesStatisticsSub) this.getValuesStatisticsSub.unsubscribe();
    if (this.getAboutStatisticsSub) this.getAboutStatisticsSub.unsubscribe();
    if (this.getWhyMeTutorsSub) this.getWhyMeTutorsSub.unsubscribe();
    if (this.getWhyWeTeachSub) this.getWhyWeTeachSub.unsubscribe();
  }
}
