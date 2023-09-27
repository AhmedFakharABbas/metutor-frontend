import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketCategory } from 'src/app/config';
import { FAQ } from 'src/app/models';
import { addMisc, getMisc } from 'src/app/utils';
import { MiscService, SupportService } from 'src/app/_api';

@Component({
  selector: 'metutors-faq-ticket',
  templateUrl: './faq-ticket.component.html',
  styleUrls: ['./faq-ticket.component.scss'],
})
export class FaqTicketComponent implements OnInit {
  faqTitle: string;
  listFAQs: FAQ[] = [];
  tempListFAQs: FAQ[] = [];
  getSystemInfoDetailsSub: Subscription;
  fetchListFaqSub: Subscription;
  systemInfoDetails: any;
  ticketCategory = TicketCategory;

  constructor(
    private title: Title,
    private supportService: SupportService,
    private miscService: MiscService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      const ticketCategory = res.get('ticket').toUpperCase();
      this.setFaqTitle(ticketCategory);
      this.title.setTitle(this.faqTitle);
      this.fetchListFaqSub = this.supportService
        .fetchListFaq(ticketCategory)
        .subscribe(
          (response) => {
            this.listFAQs = response.results;
            this.tempListFAQs = response.results;
          },
          () => {}
        );
    });

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

  setFaqTitle(category: string) {
    switch (category) {
      case this.ticketCategory.student:
        this.faqTitle = 'FAQ About Students';
        return;
      case this.ticketCategory.system:
        this.faqTitle = 'FAQ About System';
        return;
      case this.ticketCategory.technology:
        this.faqTitle = 'FAQ About Technology';
        return;
      case this.ticketCategory.tutor:
        this.faqTitle = 'FAQ About Tutors';
        return;
      default:
        return 'FAQ';
    }
  }

  ngOnDestroy(): void {
    if (this.getSystemInfoDetailsSub)
      this.getSystemInfoDetailsSub.unsubscribe();
    if (this.fetchListFaqSub) this.fetchListFaqSub.unsubscribe();
  }
}
