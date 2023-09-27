import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss'],
})
export class StudentLayoutComponent implements OnInit {
  heightPX: number;
  constructor() {}

  ngOnInit(): void {
    this.heightPX = window.innerHeight;
  }
}
