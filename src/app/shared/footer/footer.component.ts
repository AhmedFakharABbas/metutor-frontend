import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  myDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
