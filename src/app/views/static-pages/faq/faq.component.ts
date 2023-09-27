import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FAQ } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService, SupportService } from 'src/app/_api';

@Component({
  selector: 'metutors-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent implements OnInit, OnDestroy {
  listFAQs: FAQ[] = [];
  tempListFAQs: FAQ[] = [];
  getSystemInfoDetailsSub: Subscription;
  fetchListFaqSub: Subscription;
  systemInfoDetails: any;

  constructor(
    private title: Title,
    private supportService: SupportService,
    private miscService: MiscService
  ) {
    this.title.setTitle('FAQ');
  }

  ngOnInit(): void {
    this.fetchListFaqSub = this.supportService.fetchListFaq().subscribe(
      (response) => {
        this.listFAQs = response.results;
        this.tempListFAQs = response.results;
      },
      () => {}
    );

    this.getSystemInfoDetailsSub = this.miscService
      .fetchSystemInfoDetails()
      .subscribe(
        (fetchedValues) => {
          this.systemInfoDetails = fetchedValues;
          addMisc('systemInfoDetails', this.systemInfoDetails);
        },
        () => {}
      );
    this.systemInfoDetails = getMisc().systemInfoDetails;
  }

  ngOnDestroy(): void {
    if (this.getSystemInfoDetailsSub)
      this.getSystemInfoDetailsSub.unsubscribe();
    if (this.fetchListFaqSub) this.fetchListFaqSub.unsubscribe();
  }
}
