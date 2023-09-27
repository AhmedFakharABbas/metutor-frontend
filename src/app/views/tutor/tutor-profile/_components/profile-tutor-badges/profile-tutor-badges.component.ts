import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-tutor-badges',
  templateUrl: './profile-tutor-badges.component.html',
  styleUrls: ['./profile-tutor-badges.component.scss'],
})
export class ProfileTutorBadgesComponent implements OnInit {
  @Input() tutor: Tutor;

  constructor() {}

  ngOnInit(): void {}
}
