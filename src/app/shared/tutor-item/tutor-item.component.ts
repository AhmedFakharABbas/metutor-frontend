import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-tutor-item',
  templateUrl: './tutor-item.component.html',
  styleUrls: ['./tutor-item.component.scss'],
})
export class TutorItemComponent implements OnInit {
  @Input() tutor: any;

  constructor() {}

  ngOnInit(): void {}
}
