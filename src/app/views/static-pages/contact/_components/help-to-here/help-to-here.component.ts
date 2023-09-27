import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-help-to-here',
  templateUrl: './help-to-here.component.html',
  styleUrls: ['./help-to-here.component.scss'],
})
export class HelpToHereComponent implements OnInit {
  @Input() info: any;

  constructor() {}

  ngOnInit(): void {}
}
