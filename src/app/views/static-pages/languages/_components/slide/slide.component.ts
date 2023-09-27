import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-languages-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class LanguagesSlideComponent {
  @Input() category: ICategory;

  constructor() {}
}
