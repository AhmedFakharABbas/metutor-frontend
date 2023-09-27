import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ClassroomComponent } from './classroom.component';
import {
  ClassroomItemModule,
  ClassroomPlaceholderModule,
} from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: ClassroomComponent,
  },
];

@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ClassroomItemModule,
    ClassroomPlaceholderModule,
  ],
})
export class ClassroomModule {}
