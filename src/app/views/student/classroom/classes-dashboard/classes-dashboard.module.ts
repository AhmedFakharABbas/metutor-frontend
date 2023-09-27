import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClassesDashboardComponent } from './classes-dashboard.component';
import {
  ClassroomAttendancesPopupModule,
  LeaveFeedbackPopupModule,
} from 'src/app/shared/_popups';

const routes: Routes = [
  {
    path: '',
    component: ClassesDashboardComponent,
  },
];

@NgModule({
  declarations: [ClassesDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatProgressBarModule,
    ClassroomAttendancesPopupModule,
    LeaveFeedbackPopupModule,
  ],
})
export class ClassesDashboardModule {}
