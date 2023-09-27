import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'metutors-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.scss'],
})
export class StudentSidebarComponent implements OnInit, AfterContentChecked {
  hasSidemenu = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if (
      this.router.url.includes('/student/classroom/syllabus') ||
      this.router.url.includes('/student/classroom/classes-dashboard') ||
      this.router.url.includes('/student/help/faq') ||
      this.router.url.includes('/student/help/support-ticket') ||
      this.router.url.includes('/student/help/support-ticket/create-ticket')
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
