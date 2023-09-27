import { Component, Inject, NgZone } from '@angular/core';
import * as moment from 'moment';
import {
  RouterEvent,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
// import { MessagesService } from './_api/messages.service';
import { DOCUMENT } from '@angular/common';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'metutors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  progressRef: NgProgressRef;

  constructor(
    private router: Router,
    private progress: NgProgress,
    @Inject(DOCUMENT) private document: any // private messagesService: MessagesService
  ) {
    // this.messagesService.connectSocket();
    moment.locale('en');
    this.progressRef = this.progress.ref('myProgress');
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    if (localStorage.getItem('mode') == 'dark-mode') {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('dark-mode');
    }
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      window.scrollTo(0, 0);
      this.progressRef.start();
    }
    if (event instanceof NavigationEnd) {
      this.progressRef.complete();

      if (typeof window !== 'undefined') {
        this.document.documentElement.scrollTop = 0;
        this.document.body.scrollTop = 0;
      }
    }

    if (event instanceof NavigationCancel) {
      this.progressRef.complete();
    }

    if (event instanceof NavigationError) {
      this.progressRef.setConfig({ color: 'red' });
      this.progressRef.complete();
    }
  }
}
