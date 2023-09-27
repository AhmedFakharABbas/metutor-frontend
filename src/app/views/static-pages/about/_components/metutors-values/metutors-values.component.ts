import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-about-values',
  templateUrl: './metutors-values.component.html',
  styleUrls: ['./metutors-values.component.scss'],
})
export class MeTutorsValuesComponent implements OnInit {
  @Input() valuesStatistics: any;

  constructor() {}

  ngOnInit(): void {}
}
