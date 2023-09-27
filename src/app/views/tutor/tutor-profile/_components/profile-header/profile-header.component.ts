import { Component, Input, OnInit } from '@angular/core';
import { TutorStatus } from 'src/app/config';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input() tutor: Tutor;
  tutorStatus = TutorStatus;

  constructor() {}

  ngOnInit(): void {}
}
