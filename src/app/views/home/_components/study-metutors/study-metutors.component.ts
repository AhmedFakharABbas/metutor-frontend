import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-home-study-metutors',
  templateUrl: './study-metutors.component.html',
  styleUrls: ['./study-metutors.component.scss'],
})
export class HomeStudyMetutorsComponent implements OnInit {
  @Input() categories: ICategory[];

  constructor() {}

  ngOnInit(): void {}
}
