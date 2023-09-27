import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyllabusComponent } from './syllabus.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SyllabusComponent,
  },
];

@NgModule({
  declarations: [SyllabusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
})
export class SyllabusModule {}
