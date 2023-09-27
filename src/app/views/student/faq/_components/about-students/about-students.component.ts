import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FAQ } from 'src/app/models';

@Component({
  selector: 'metutors-about-students',
  templateUrl: './about-students.component.html',
  styleUrls: ['./about-students.component.scss'],
})
export class AboutStudentsComponent implements OnInit {
  @Input() listFAQs: FAQ[];
  @Input() tempListFAQs: FAQ[];
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
