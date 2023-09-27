import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'metutors-loving-opportunities',
  templateUrl: './loving-opportunities.component.html',
  styleUrls: ['./loving-opportunities.component.scss'],
})
export class LovingOpportunitiesComponent implements OnInit {
  @Input() opportunities = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText: ['', ''],
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
