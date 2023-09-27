import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ICategory } from 'src/app/models';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';

@Component({
  selector: 'metutors-navbar-mobile',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:scroll)': 'updateNavbar($event)',
  },
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class NavbarMobileComponent implements OnInit, OnDestroy {
  @Input() categories: ICategory[];
  scrollTop: boolean = false;
  showSidebar: boolean = false;
  openCategories: boolean = false;
  @Output() openLoginPopup = new EventEmitter<boolean>();
  @Output() openRegisterPopup = new EventEmitter<boolean>();

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset >= 65) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  }

  updateNavbar(evt) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset >= 65) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  }

  scroll = (event): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset >= 65) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  };

  openLoginPopupFun(): void {
    this.openLoginPopup.emit(true);
  }

  openRegisterPopupFun(): void {
    this.openRegisterPopup.emit(true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
