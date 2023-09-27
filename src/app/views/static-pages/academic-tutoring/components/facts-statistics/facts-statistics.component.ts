import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/models';

@Component({
  selector: 'metutors-facts-statistics',
  templateUrl: './facts-statistics.component.html',
  styleUrls: ['./facts-statistics.component.scss'],
})
export class FactsStatisticsComponent implements OnInit {
  @Input() statistics: Statistics[];

  constructor() {}

  ngOnInit(): void {}
}
