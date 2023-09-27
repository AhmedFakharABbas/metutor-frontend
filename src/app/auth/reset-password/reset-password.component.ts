import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertNotificationService } from 'src/app/shared';
import { AuthService } from '../auth.service';

@Component({
  selector: 'metutors-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  heightPX: number;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private alertNotificationService: AlertNotificationService
  ) {
    this.title.setTitle('Reset password');
  }

  ngOnInit(): void {
    this.heightPX = window.innerHeight - 100;
    this.form = this.fb.group(
      {
        token: [null, Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required],
      },
      { validator: this.checkPasswords }
    );

    this.route.queryParams.subscribe((params) => {
      this.form.patchValue({ token: params.token });
      this.form.get('token').updateValueAndValidity();
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('repassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.authService.resetPassword(form.value).subscribe(
        (result) => {
          this.loading = false;
          this.alertNotificationService.success(
            'Your password has been updated successfully'
          );
          this.form.reset();
          this.router.navigate(['/signin']);
        },
        (err) => {
          this.loading = false;
          const error = err.error;
          if (
            error.password &&
            Array.isArray(error.password) &&
            error.password.length
          ) {
            error.password.forEach((item) => {
              this.alertNotificationService.error(item);
            });
          } else {
            this.alertNotificationService.error(
              'Sorry! Password not updated yet!'
            );
          }
        }
      );
    }
  }
}
