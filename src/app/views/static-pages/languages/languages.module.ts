import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  IntroducingComponent,
  LanguagesSlideComponent,
  LanguagesCoursesComponent,
  TestimonialComponent,
} from './_components';
import {
  CourseItemHorizentalModule,
  StartLearningNowModule,
} from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: LanguagesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    StartLearningNowModule,
    CourseItemHorizentalModule,
    DirectiveModule,
    CarouselModule,
  ],
  declarations: [
    LanguagesComponent,
    LanguagesSlideComponent,
    IntroducingComponent,
    LanguagesCoursesComponent,
    TestimonialComponent,
  ],
  providers: [],
})
export class LanguagesModule {}
