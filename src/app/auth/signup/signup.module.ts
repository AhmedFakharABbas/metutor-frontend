import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatDialogModule } from '@angular/material/dialog';
import { OpinionsModule } from '../_shared/opinions/opinions.module';
import { ConfirmEmailPopupComponent } from '../_components/confirm-email-popup/confirm-email-popup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    OpinionsModule,
    NgxIntlTelInputModule,
    MatDialogModule,
  ],
  declarations: [SignupComponent, ConfirmEmailPopupComponent],
  providers: [],
})
export class SignupModule {}
