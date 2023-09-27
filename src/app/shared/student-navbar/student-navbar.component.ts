import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LIST_ROUTES } from 'src/app/utils';

@Component({
  selector: 'metutors-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.scss'],
})
export class StudentNavbarComponent {
  location: Location;

  constructor(location: Location, public authService: AuthService) {
    this.location = location;
  }

  ngOnInit(): void {}

  getTitle(): string {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    let title = 'Dashboard';

    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    LIST_ROUTES.forEach((route) => {
      if (route.path === titlee) {
        title = route.title;
      }
    });

    return title;
  }
}
