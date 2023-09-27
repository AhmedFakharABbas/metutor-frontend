import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-benefits-tutoring',
  templateUrl: './benefits-tutoring.component.html',
  styleUrls: ['./benefits-tutoring.component.scss'],
})
export class BenefitsTutoringComponent implements OnInit {
  @Input() academicTutoringBenefits: any;

  constructor() {}

  ngOnInit(): void {}
}
