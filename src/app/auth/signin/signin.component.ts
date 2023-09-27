import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertNotificationService } from 'src/app/shared';
import { Title } from '@angular/platform-browser';
import { UserRole } from 'src/app/config';

@Component({
  selector: 'metutors-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  signinForm: FormGroup;
  signinSub: Subscription;
  heightPX: number;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertNotificationService: AlertNotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Sign in');
  }

  ngOnInit(): void {
    this.heightPX = window.innerHeight - 100;
    this.signinForm = this.fb.group({
      username: [null, [Validators.required, this.noWhitespaceValidator]],
      password: [null, [Validators.required, this.noWhitespaceValidator]],
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    this.loading = true;
    this.signinSub = this.authService.login(form.value).subscribe(
      (response) => {
        if (response) {
          this.signinForm.reset();
          localStorage.setItem('token', response.token);
          localStorage.setItem('refresh-token', response.refresh);
          this.loading = false;
          if (
            this.route.snapshot.queryParams.returnUrl &&
            decodeURIComponent(this.route.snapshot.queryParams.returnUrl)
          ) {
            let returnUrl = decodeURIComponent(
              this.route.snapshot.queryParams.returnUrl
            );
            this.router.navigate([returnUrl]);
          } else {
            if (response.role === UserRole.student) {
              this.router.navigate(['/student']);
            } else if (response.role === UserRole.tutor) {
              this.router.navigate(['/tutor']);
            } else {
              this.router.navigate(['/']);
            }
          }
        }
      },
      (error) => {
        const err = error.error.detail;
        if (err) this.alertNotificationService.error(err);
        else
          this.alertNotificationService.error(
            'Something went wrong while sign-in'
          );
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.signinSub) this.signinSub.unsubscribe();
  }
}
