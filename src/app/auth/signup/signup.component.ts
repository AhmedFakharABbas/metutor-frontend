import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CountryISO } from 'ngx-intl-tel-input';
import { UsersService } from 'src/app/_api/users.service';
import { multipleWordsValidator } from 'src/app/utils/validators';
import { animate, style, transition, trigger } from '@angular/animations';
import { AlertNotificationService } from 'src/app/shared';
import { ConfirmEmailPopupComponent } from '../_components/confirm-email-popup/confirm-email-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'metutors-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('userTypeAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class SignupComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  signupForm: FormGroup;
  signupSub: Subscription;
  selectedCountry: string = '';
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  userType: number;
  roles: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertNotificationService: AlertNotificationService,
    public dialog: MatDialog,
    private router: Router,
    private userService: UsersService,
    private title: Title
  ) {
    this.title.setTitle('Create new Account');
  }

  ngOnInit(): void {
    this.roles = new Array<Role>();
    this.userService.getUserLocation().then((res) => {
      if (res && res.countryCode) {
        this.selectedCountry = res.countryCode.toLowerCase();
      }
    });
    this.signupForm = this.fb.group({
      displayName: [
        null,
        [
          Validators.required,
          this.noWhitespaceValidator,
          multipleWordsValidator(),
        ],
      ],
      firstName: [null, [Validators.required, this.noWhitespaceValidator]],
      lastName: [null, [Validators.required, this.noWhitespaceValidator]],
      email: [
        null,
        [Validators.required, Validators.email, this.noWhitespaceValidator],
      ],
      mobileNumber: [null, [Validators.required]],
      password: [null, [Validators.required, this.noWhitespaceValidator]],
    });
    this.userService.getRoles().subscribe((response) => {
      if (response) {
        this.roles = response.roles;
        this.userType = 1;
      } else {
      }
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  get displayName(): AbstractControl {
    return this.signupForm.get('displayName');
  }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  get phoneNumber(): AbstractControl {
    return this.signupForm.get('mobileNumber');
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    this.loading = true;
    const data = {
      firstName: this.displayName.value.replace(/ .*/, ''),
      lastName: this.displayName.value.substr(
        this.displayName.value.indexOf(' ') + 1
      ),
      email: this.email.value,
      mobileNumber: this.phoneNumber.value.internationalNumber,
      language: 'en',
      country: this.phoneNumber.value.countryCode,
      password: this.password.value,
    };
    if (this.userType == 1) {
      console.log(data);
      // this.signupSub = this.authService.registerStudent(data).subscribe(
      //   (response) => {
      //     this.signupForm.reset();
      //     this.loading = false;
      //     this.openDialog(data);
      //   },
      //   (err) => {
      //     const error = err.error;
      //     if (error.email && Array.isArray(error.email) && error.email.length) {
      //       error.email.forEach((item) => {
      //         this.alertNotificationService.error(item);
      //       });
      //     }
      //     if (
      //       error.password &&
      //       Array.isArray(error.password) &&
      //       error.password.length
      //     ) {
      //       error.password.forEach((item) => {
      //         this.alertNotificationService.error(item);
      //       });
      //     }
      //     this.loading = false;
      //   }
      // );
    } else {
      this.signupSub = this.authService.registerTutor(data).subscribe(
        (response) => {
          this.signupForm.reset();
          this.loading = false;
          this.openDialog(data);
        },
        (err) => {
          const error = err.error;
          if (error.email && Array.isArray(error.email) && error.email.length) {
            error.email.forEach((item) => {
              this.alertNotificationService.error(item);
            });
          } else if (
            error.password &&
            Array.isArray(error.password) &&
            error.password.length
          ) {
            error.password.forEach((item) => {
              this.alertNotificationService.error(item);
            });
          } else {
            this.alertNotificationService.error(
              'Something went wrong while creating the account'
            );
          }
          this.loading = false;
        }
      );
    }
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(ConfirmEmailPopupComponent, {
      width: '500px',
      data,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/signin']);
    });
  }

  ngOnDestroy(): void {
    if (this.signupSub) this.signupSub.unsubscribe();
  }
}
