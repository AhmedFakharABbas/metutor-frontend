import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentSuccessComponent } from './student-success.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import {
  GetYourClassesComponent,
  LearningMadeEasyComponent,
  StudentSuccessSlideComponent,
  TrustHappyStudentsComponent,
} from './_components';
import {
  BenefitsOnlineTutoringModule,
  StartLearningNowModule,
  SuccessStoriesModule,
  VideoPlayerModule,
} from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: StudentSuccessComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    VideoPlayerModule,
    CarouselModule,
    SuccessStoriesModule,
    StartLearningNowModule,
    BenefitsOnlineTutoringModule,
  ],
  declarations: [
    StudentSuccessComponent,
    StudentSuccessSlideComponent,
    TrustHappyStudentsComponent,
    GetYourClassesComponent,
    LearningMadeEasyComponent,
  ],
  providers: [],
})
export class StudentSuccessModule {}
