import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeClassroomComponent } from './customize-classroom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {
  ClassroomInfoFormComponent,
  DialogEditClassroom,
  DialogRemoveClassroom,
  ListClassroomsFormComponent,
  ReviewRequestComponent,
  SelectTutorFormComponent,
  CourseDetailsComponent,
} from '../_components';
import { CalendarModule } from 'primeng/calendar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingModule } from 'ngx-bootstrap/rating';
import { DirectiveModule } from 'src/app/shared/_directives';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  {
    path: '',
    component: CustomizeClassroomComponent,
  },
];

@NgModule({
  declarations: [
    CustomizeClassroomComponent,
    ClassroomInfoFormComponent,
    ListClassroomsFormComponent,
    DialogRemoveClassroom,
    DialogEditClassroom,
    SelectTutorFormComponent,
    ReviewRequestComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    CalendarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    RatingModule.forRoot(),
    DirectiveModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
  ],
})
export class CustomizeClassroomModule {}
