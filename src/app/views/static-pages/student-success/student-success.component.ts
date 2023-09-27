import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'metutors-student-success',
  templateUrl: './student-success.component.html',
  styleUrls: ['./student-success.component.scss']
})
export class StudentSuccessComponent {
  constructor(private title: Title) {
    this.title.setTitle('Student Success');
  }
}
