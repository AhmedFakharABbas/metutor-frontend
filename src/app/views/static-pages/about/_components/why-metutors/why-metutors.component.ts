import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-why-metutors',
  templateUrl: './why-metutors.component.html',
  styleUrls: ['./why-metutors.component.scss'],
})
export class WhyMeTutorsComponent implements OnInit {
  @Input() whyMeTutorsList: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
