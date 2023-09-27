import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-tutor-layout',
  templateUrl: './tutor-layout.component.html',
  styleUrls: ['./tutor-layout.component.scss'],
})
export class TutorLayoutComponent implements OnInit {
  heightPX: number;
  constructor() {}

  ngOnInit(): void {
    this.heightPX = window.innerHeight;
  }
}
