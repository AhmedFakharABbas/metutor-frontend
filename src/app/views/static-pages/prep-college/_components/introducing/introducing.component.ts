import { Component, Input } from '@angular/core';

@Component({
  selector: 'metutors-prep-college-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.scss'],
})
export class IntroducingComponent {
  @Input() prepCollageIntro: any;

  constructor() {}
}
