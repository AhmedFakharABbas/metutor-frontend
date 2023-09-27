import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'metutors-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  constructor(private title: Title) {
    this.title.setTitle('GetStarted');
  }
}
