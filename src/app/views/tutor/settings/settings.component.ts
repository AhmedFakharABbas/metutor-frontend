import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  tab = 'ACCOUNT_SETTINGS';

  constructor() {}

  ngOnInit(): void {}
}
