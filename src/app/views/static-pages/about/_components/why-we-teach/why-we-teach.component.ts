import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-why-we-teach',
  templateUrl: './why-we-teach.component.html',
  styleUrls: ['./why-we-teach.component.scss'],
})
export class WhyWeTeachComponent implements OnInit {
  @Input() whyWeTeach: any;

  constructor() {}

  ngOnInit(): void {}
}
