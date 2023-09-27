import {
  AfterContentChecked,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/models';
import { CoursesService } from 'src/app/_api';

@Component({
  selector: 'metutors-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss'],
})
export class WebsiteLayoutComponent
  implements OnInit, AfterContentChecked, OnDestroy {
  fetchMainServicesSub: Subscription;
  categories: ICategory[] = [];
  heightPX: number;
  showFooter: boolean = true;
  showMobileView: boolean = false;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.heightPX = window.innerHeight - 300;

    this.fetchMainServicesSub = this.coursesService
      .fetchMainServices()
      .subscribe((response) => {
        this.categories = response.results;
      });
  }

  ngAfterContentChecked(): void {
    if (
      this.router.url.split('?')[0].split('#')[0] == '/signin' ||
      this.router.url.split('?')[0].split('#')[0] == '/signup' ||
      this.router.url.split('?')[0].split('#')[0] == '/forget-password' ||
      this.router.url.split('?')[0].split('#')[0] == '/reset-password' ||
      this.router.url.split('?')[0].split('#')[0] == '/welcome'
    )
      this.showFooter = false;
    else this.showFooter = true;

    if (typeof window !== 'undefined') {
      this.ngZone.run(() => {
        if (window.innerWidth <= 991) this.showMobileView = true;
        else this.showMobileView = false;
      });
      window.onresize = (e) => {
        this.ngZone.run(() => {
          if (window.innerWidth <= 991) this.showMobileView = true;
          else this.showMobileView = false;
        });
      };
    }
  }

  ngOnDestroy(): void {
    if (this.fetchMainServicesSub) this.fetchMainServicesSub.unsubscribe();
  }
}
