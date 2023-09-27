import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FAQ } from 'src/app/models';

@Component({
  selector: 'metutors-faq-search',
  templateUrl: './faq-search.component.html',
  styleUrls: ['./faq-search.component.scss'],
})
export class FaqSearchComponent implements OnInit {
  @Input() listFAQs: FAQ[];
  @Input() tempListFAQs: FAQ[];
  @Input() title: string;
  @Output() submitFAQ = new EventEmitter<FAQ[]>();

  constructor() {}

  ngOnInit(): void {}

  filterFAQ(key: string) {
    this.listFAQs = [];
    for (var i = 0; i < this.tempListFAQs.length; i++) {
      if (
        this.tempListFAQs[i].question.toLowerCase().includes(key.toLowerCase())
      ) {
        this.listFAQs.push(this.tempListFAQs[i]);
      }
    }

    this.submitFAQ.emit(this.listFAQs);
  }
}
