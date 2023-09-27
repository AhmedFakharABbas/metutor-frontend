import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LeaveFeedbackPopupComponent,
  DialogLeaveFeedbackPopup,
} from './leave-feedback-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LeaveFeedbackPopupComponent, DialogLeaveFeedbackPopup],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    RatingModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  exports: [LeaveFeedbackPopupComponent],
})
export class LeaveFeedbackPopupModule {}
