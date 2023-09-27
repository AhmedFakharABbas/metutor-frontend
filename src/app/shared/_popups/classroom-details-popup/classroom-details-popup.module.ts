import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ClassroomDetailsPopupComponent,
  DialogClassroomDetailsPopup,
} from './classroom-details-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ClassroomDetailsPopupComponent, DialogClassroomDetailsPopup],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [ClassroomDetailsPopupComponent],
})
export class ClassroomDetailsPopupModule {}
