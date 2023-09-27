import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-still-have-questions',
  templateUrl: './still-have-questions.component.html',
  styleUrls: ['./still-have-questions.component.scss'],
})
export class StillHaveQuestionsComponent implements OnInit {
  @Input() info: any;

  constructor() {}

  ngOnInit(): void {}
}
