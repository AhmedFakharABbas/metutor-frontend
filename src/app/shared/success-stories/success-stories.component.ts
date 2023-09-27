import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MiscService } from 'src/app/_api';
import { addMisc, getMisc } from 'src/app/utils';

@Component({
  selector: 'metutors-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss'],
})
export class SuccessStoriesComponent implements OnInit, OnDestroy {
  testmonials = [];
  getFeaturedTestmonialsSub: Subscription;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText: [
      '<mat-icon>chevron_left</mat-icon>',
      '<mat-icon>chevron_right</mat-icon>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
    },
    nav: false,
  };

  constructor(private miscService: MiscService) {}

  ngOnInit(): void {
    this.getFeaturedTestmonialsSub = this.miscService
      .fetchTestmonials()
      .subscribe(
        (fetchedTestmonials) => {
          this.testmonials = fetchedTestmonials.results;
          addMisc('testmonials', this.testmonials);
        },
        () => {}
      );
  }

  getTestmonialsMisc(): any {
    return getMisc().testmonials;
  }

  ngOnDestroy(): void {
    if (this.getFeaturedTestmonialsSub)
      this.getFeaturedTestmonialsSub.unsubscribe();
  }
}
