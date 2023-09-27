import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Tutor } from 'src/app/models';
import { TutorStatus } from 'src/app/config';

@Component({
  selector: 'metutors-home-featured-tutors',
  templateUrl: './featured-tutors.component.html',
  styleUrls: ['./featured-tutors.component.scss'],
})
export class HomeFeaturedTutorsComponent implements OnInit {
  @Input() teachers: Tutor[] = [];
  tutorStatus = TutorStatus;
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
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
