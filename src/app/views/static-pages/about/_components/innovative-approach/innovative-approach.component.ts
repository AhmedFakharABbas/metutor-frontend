import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-innovative-approach',
  templateUrl: './innovative-approach.component.html',
  styleUrls: ['./innovative-approach.component.scss'],
})
export class InnovativeApproachComponent implements OnInit {
  @Input() innovateApproach: any;

  constructor() {}

  ngOnInit(): void {}
}
