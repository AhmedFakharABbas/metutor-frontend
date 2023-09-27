import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TicketStatus } from 'src/app/config';
import { Ticket } from 'src/app/models';
import { SupportService } from 'src/app/_api';

@Component({
  selector: 'metutors-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
})
export class MyTicketsComponent implements OnInit, OnDestroy {
  listTickets: Ticket[] = [];
  getListTicketsSub: Subscription;
  ticketStatus = TicketStatus;

  constructor(private title: Title, private supportService: SupportService) {
    this.title.setTitle('My tickets');
  }

  ngOnInit(): void {
    this.getListTicketsSub = this.supportService.fetchListTickets().subscribe(
      (response) => {
        this.listTickets = response;
      },
      () => {}
    );
  }

  ngOnDestroy(): void {
    if (this.getListTicketsSub) this.getListTicketsSub.unsubscribe();
  }
}
