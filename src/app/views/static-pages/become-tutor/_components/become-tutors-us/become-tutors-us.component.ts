import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-become-tutors-us',
  templateUrl: './become-tutors-us.component.html',
  styleUrls: ['./become-tutors-us.component.scss'],
})
export class BecomeTutorsUsComponent implements OnInit {
  @Input() becomeTutors: any;

  constructor() {}

  ngOnInit(): void {}
}
