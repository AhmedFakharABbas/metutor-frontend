import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepCollegeComponent } from './prep-college.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import {
  CourseItemHorizentalModule,
  StartLearningNowModule,
} from 'src/app/shared';
import {
  SlideComponent,
  IntroducingComponent,
  PrepCollegeCoursesComponent,
  TestimonialComponent,
} from './_components';

const routes: Routes = [
  {
    path: '',
    component: PrepCollegeComponent,
  },
];

@NgModule({
  declarations: [
    PrepCollegeComponent,
    SlideComponent,
    IntroducingComponent,
    PrepCollegeCoursesComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    CourseItemHorizentalModule,
    CarouselModule,
    DirectiveModule,
    StartLearningNowModule,
  ],
})
export class PrepCollegeModule {}
