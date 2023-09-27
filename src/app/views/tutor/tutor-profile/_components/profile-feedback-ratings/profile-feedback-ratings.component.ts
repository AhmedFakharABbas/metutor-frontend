import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-feedback-ratings',
  templateUrl: './profile-feedback-ratings.component.html',
  styleUrls: ['./profile-feedback-ratings.component.scss'],
})
export class ProfileFeedbackRatingsComponent implements OnInit {
  @Input() tutor: Tutor;

  constructor() {}

  ngOnInit(): void {}
}
