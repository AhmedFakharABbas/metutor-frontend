import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomsComponent } from './classrooms.component';
import { RouterModule, Routes } from '@angular/router';
import {
  SlideComponent,
  ListClassroomsComponent,
  ClassroomsFilterComponent,
} from './_components';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  ClassroomItemHorizentalModule,
  ClassroomPlaceholderModule,
} from 'src/app/shared';
import { DirectiveModule } from 'src/app/shared/_directives';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  {
    path: '',
    component: ClassroomsComponent,
  },
];

@NgModule({
  declarations: [
    ClassroomsComponent,
    SlideComponent,
    ListClassroomsComponent,
    ClassroomsFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    PaginationModule,
    MatCheckboxModule,
    ClassroomItemHorizentalModule,
    DirectiveModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatRadioModule,
    ClassroomPlaceholderModule,
  ],
})
export class ClassroomsModule {}
