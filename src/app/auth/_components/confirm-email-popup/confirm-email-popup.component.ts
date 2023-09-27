import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AlertNotificationService } from 'src/app/shared';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'metutors-confirm-email-popup',
  templateUrl: './confirm-email-popup.component.html',
  styleUrls: ['./confirm-email-popup.component.scss'],
})
export class ConfirmEmailPopupComponent implements OnInit, OnDestroy {
  resendEmailConfirmSub: Subscription;
  isResend = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmEmailPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private alertNotificationService: AlertNotificationService
  ) {}

  ngOnInit(): void {}

  resendEmailConfirm(): void {
    this.isResend = true;
    this.resendEmailConfirmSub = this.authService
      .resendEmailConfirm({ email: this.data.email })
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

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.resendEmailConfirmSub) this.resendEmailConfirmSub.unsubscribe();
  }
}
