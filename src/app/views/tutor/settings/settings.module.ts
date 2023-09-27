import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SettingsComponent } from './settings.component';
import { MatIconModule } from '@angular/material/icon';
import {
  AccountSettingsComponent,
  SecuritySettingsComponent,
  UserPreferencesComponent,
  PaymentInformationComponent,
} from './_components';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    AccountSettingsComponent,
    SecuritySettingsComponent,
    UserPreferencesComponent,
    PaymentInformationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class SettingsModule {}
