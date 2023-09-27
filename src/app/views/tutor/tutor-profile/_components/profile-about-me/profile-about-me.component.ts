import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-about-me',
  templateUrl: './profile-about-me.component.html',
  styleUrls: ['./profile-about-me.component.scss'],
})
export class ProfileAboutMeComponent implements OnInit {
  @Input() tutor: Tutor;

  constructor() {}

  ngOnInit(): void {}
}
