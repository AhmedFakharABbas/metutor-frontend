import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/models';

@Component({
  selector: 'metutors-exceptional-opportunities',
  templateUrl: './exceptional-opportunities.component.html',
  styleUrls: ['./exceptional-opportunities.component.scss'],
})
export class ExceptionalOpportunitiesComponent implements OnInit {
  @Input() tutorStatistics: Statistics[];

  constructor() {}

  ngOnInit(): void {}
}
