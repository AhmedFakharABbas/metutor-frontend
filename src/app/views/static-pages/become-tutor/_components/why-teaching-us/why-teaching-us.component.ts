import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-become-tutor-why-teaching-us',
  templateUrl: './why-teaching-us.component.html',
  styleUrls: ['./why-teaching-us.component.scss'],
})
export class BecomeTutorWhyTeachingUsComponent implements OnInit {
  @Input() whyTeachingUsList: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
