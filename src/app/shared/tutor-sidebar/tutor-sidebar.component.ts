import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'metutors-tutor-sidebar',
  templateUrl: './tutor-sidebar.component.html',
  styleUrls: ['./tutor-sidebar.component.scss'],
})
export class TutorSidebarComponent implements OnInit, AfterContentChecked {
  hasSidemenu = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if (
      this.router.url.includes('/tutor/classroom/syllabus') ||
      this.router.url.includes('/tutor/classroom/classes-dashboard') ||
      this.router.url.includes('/tutor/help/faq') ||
      this.router.url.includes('/tutor/help/support-ticket') ||
      this.router.url.includes('/tutor/help/support-ticket/create-ticket') ||
      this.router.url.includes('/tutor/help/support-ticket')
    ) {
      this.hasSidemenu = true;
    } else {
      this.hasSidemenu = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
