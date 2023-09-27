import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertNotificationService } from 'src/app/shared';
import { AuthService } from '../auth.service';

@Component({
  selector: 'metutors-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss'],
})
export class ConfirmEmailComponent implements OnInit, OnDestroy {
  isConfirmEmail = true;
  confirmEmailSub: Subscription;
  resendEmailConfirmSub: Subscription;
  isResend = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertNotificationService: AlertNotificationService,
    private title: Title
  ) {
    this.title.setTitle('Confirm Email');
  }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParams.token;
    const uid = this.route.snapshot.queryParams.uid;
    this.confirmEmailSub = this.authService
      .confirmEmail({ uid, token })
      .subscribe(
        (response) => {
          if (response.status_code === 200) {
            this.isConfirmEmail = false;
            this.alertNotificationService.success(
              'You activate your email address successfully'
            );
            this.router.navigate(['/signin']);
          } else {
            this.isConfirmEmail = false;
            this.alertNotificationService.error(
              'Sorry! Your email not activated yet! Try to re-send new confirmation'
            );
          }
        },
        (error) => {
          this.isConfirmEmail = false;
          this.alertNotificationService.error(
            error.error.message ||
              'Sorry! Your email not activated yet! Try to re-send new confirmation'
          );
        }
      );
  }

  resendEmailConfirm(): void {
    this.isResend = true;
    const email = this.route.snapshot.queryParams.email;
    this.resendEmailConfirmSub = this.authService
      .resendEmailConfirm({ email })
      .subscribe(
        (response) => {
          if (response.status_code === 200) {
            this.isResend = false;
            this.alertNotificationService.success(
              'Your confirmation email has been sent successfully'
            );
          } else {
            this.isResend = false;
            this.alertNotificationService.error(
              'Your confirmation email not send yet!'
            );
          }
        },
        (error) => {
          this.isResend = false;
          this.alertNotificationService.error(
            error.error.detail || 'Your confirmation email not send yet!'
          );
        }
      );
  }

  ngOnDestroy(): void {
    if (this.confirmEmailSub) this.confirmEmailSub.unsubscribe();
    if (this.resendEmailConfirmSub) this.resendEmailConfirmSub.unsubscribe();
  }
}
