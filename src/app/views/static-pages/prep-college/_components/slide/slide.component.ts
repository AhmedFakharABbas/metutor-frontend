import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-prep-college-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() category: ICategory;

  constructor() {}

  ngOnInit(): void {}
}
