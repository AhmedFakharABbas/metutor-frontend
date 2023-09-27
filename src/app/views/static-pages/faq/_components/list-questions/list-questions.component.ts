import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import { FAQ } from 'src/app/models';

@Component({
  selector: 'metutors-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class ListQuestionsComponent implements OnInit {
  @Input() listFAQs: FAQ[];
  openQuestion: boolean = false;
  selectedQuestion: number;

  constructor() {}

  ngOnInit(): void {}

  changeOpenSelection(id: number) {
    if (this.selectedQuestion === id) {
      this.openQuestion = false;
      this.selectedQuestion = null;
    } else {
      this.openQuestion = true;
      this.selectedQuestion = id;
    }
  }
}
