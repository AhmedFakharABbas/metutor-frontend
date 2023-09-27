import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTutorComponent } from './request-tutor.component';
import { RouterModule, Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarModule } from 'primeng/calendar';
import { DirectiveModule } from 'src/app/shared/_directives';
import {
  CourseInformationFormComponent,
  ClassroomInfoFormComponent,
  ListClassroomsFormComponent,
  DialogRemoveClassroom,
  DialogEditClassroom,
  SelectTutorFormComponent,
  ReviewRequestComponent,
} from './_components';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingModule } from 'ngx-bootstrap/rating';

const routes: Routes = [
  {
    path: '',
    component: RequestTutorComponent,
  },
];

@NgModule({
  declarations: [
    RequestTutorComponent,
    CourseInformationFormComponent,
    ClassroomInfoFormComponent,
    ListClassroomsFormComponent,
    DialogRemoveClassroom,
    DialogEditClassroom,
    SelectTutorFormComponent,
    ReviewRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    DirectiveModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule,
    MatDialogModule,
    FormsModule,
    RatingModule.forRoot(),
  ],
})
export class RequestTutorModule {}
