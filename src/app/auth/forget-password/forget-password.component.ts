import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertNotificationService } from 'src/app/shared';
import { AuthService } from '../auth.service';

@Component({
  selector: 'metutors-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  heightPX: number;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertNotificationService: AlertNotificationService,
    private authService: AuthService,
    private title: Title
  ) {
    this.title.setTitle('Forget password');
  }

  ngOnInit(): void {
    this.heightPX = window.innerHeight - 100;
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.authService.forgetPassword(form.value.email).subscribe(
        () => {
          this.loading = false;
          this.alertNotificationService.success(
            'Activation link has been sent successfully to your email'
          );
          this.form.reset();
        },
        (err) => {
          this.loading = false;
          const error = err.error;
          if (error.email && Array.isArray(error.email) && error.email.length) {
            error.email.forEach((item) => {
              this.alertNotificationService.error(item);
            });
          } else {
            this.alertNotificationService.error(
              'Something went wrong while sending the email'
            );
          }
        }
      );
    }
  }
}
