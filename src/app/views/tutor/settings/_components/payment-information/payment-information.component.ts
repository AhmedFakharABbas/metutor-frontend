import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
})
export class PaymentInformationComponent implements OnInit {
  selectedCard: string;

  constructor() {}

  ngOnInit(): void {}
}
