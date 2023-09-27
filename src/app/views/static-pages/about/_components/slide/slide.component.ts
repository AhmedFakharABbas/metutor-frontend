import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/models';

@Component({
  selector: 'metutors-about-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class AboutSlideComponent implements OnInit {
  @Input() aboutStatistics: Statistics[];

  constructor() {}

  ngOnInit(): void {}
}
