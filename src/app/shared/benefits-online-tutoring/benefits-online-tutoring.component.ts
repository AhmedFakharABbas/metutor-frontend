import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-benefits-online-tutoring',
  templateUrl: './benefits-online-tutoring.component.html',
  styleUrls: ['./benefits-online-tutoring.component.scss'],
})
export class BenefitsOnlineTutoringComponent implements OnInit, OnDestroy {
  getWhyTeachingUsSub: Subscription;
  whyTeachingUsList: any[] = [];

  constructor(private miscService: MiscService) {}

  ngOnInit(): void {
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
    if (this.getWhyTeachingUsSub) this.getWhyTeachingUsSub.unsubscribe();
  }
}
