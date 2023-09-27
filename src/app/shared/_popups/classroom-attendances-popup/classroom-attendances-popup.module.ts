import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ClassroomAttendancesPopupComponent,
  DialogClassroomAttendancesPopup,
} from './classroom-attendances-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ClassroomAttendancesPopupComponent,
    DialogClassroomAttendancesPopup,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
  ],
  exports: [ClassroomAttendancesPopupComponent],
})
export class ClassroomAttendancesPopupModule {}
