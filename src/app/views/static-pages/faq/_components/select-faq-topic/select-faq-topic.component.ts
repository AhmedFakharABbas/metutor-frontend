import { Component, OnInit } from '@angular/core';
import { TicketCategory } from 'src/app/config';

@Component({
  selector: 'metutors-select-faq-topic',
  templateUrl: './select-faq-topic.component.html',
  styleUrls: ['./select-faq-topic.component.scss'],
})
export class SelectFaqTopicComponent implements OnInit {
  ticketCategory = TicketCategory;

  constructor() {}

  ngOnInit(): void {}
}
