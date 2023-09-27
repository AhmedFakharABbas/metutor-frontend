import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ICategory } from 'src/app/models';

@Component({
  selector: 'metutors-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:scroll)': 'updateHeader($event)',
  },
})
export class NavbarComponent implements OnInit {
  @Input() categories: ICategory[];
  scrollTop: boolean = false;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {}

  updateHeader(evt) {
    if (window.pageYOffset >= 65) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
