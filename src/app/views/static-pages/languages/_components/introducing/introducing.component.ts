import { Component, Input } from '@angular/core';

@Component({
  selector: 'metutors-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.scss'],
})
export class IntroducingComponent {
  @Input() langCourseIntro: any;

  constructor() {}
}
