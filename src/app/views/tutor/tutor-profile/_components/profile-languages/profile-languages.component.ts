import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-languages',
  templateUrl: './profile-languages.component.html',
  styleUrls: ['./profile-languages.component.scss'],
})
export class ProfileLanguagesComponent implements OnInit {
  @Input() tutor: Tutor;

  constructor() {}

  ngOnInit(): void {}
}
