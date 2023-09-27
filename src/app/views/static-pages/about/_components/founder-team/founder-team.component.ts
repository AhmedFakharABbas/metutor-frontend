import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-founder-team',
  templateUrl: './founder-team.component.html',
  styleUrls: ['./founder-team.component.scss'],
})
export class FounderTeamComponent implements OnInit {
  @Input() founders: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
