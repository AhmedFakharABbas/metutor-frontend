import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CourseDetailsPopupComponent,
  DialogCourseDetailsPopup,
} from './course-details-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [CourseDetailsPopupComponent, DialogCourseDetailsPopup],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [CourseDetailsPopupComponent],
})
export class CourseDetailsPopupModule {}
