import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses.component';
import { RouterModule, Routes } from '@angular/router';
import {
  AcademicLearningEnvironmentComponent,
  AvailableCoursesComponent,
  CoursesFilterComponent,
  ExploreCoursesComponent,
} from './_components';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CourseItemHorizentalModule } from 'src/app/shared';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [{ path: '', component: AllCoursesComponent }];

@NgModule({
  declarations: [
    AllCoursesComponent,
    AvailableCoursesComponent,
    ExploreCoursesComponent,
    AcademicLearningEnvironmentComponent,
    CoursesFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    CourseItemHorizentalModule,
    PaginationModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
})
export class AllCoursesModule {}
