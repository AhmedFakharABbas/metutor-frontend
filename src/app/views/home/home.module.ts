import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  CourseItemModule,
  LearningEnvironmentModule,
  SuccessStoriesModule,
} from 'src/app/shared';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import {
  HomeCoursesComponent,
  HomeFeaturedTutorsComponent,
  HomeSlideComponent,
  HomeStudyMetutorsComponent,
} from './_components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    RatingModule,
    FormsModule,
    SuccessStoriesModule,
    CarouselModule,
    CourseItemModule,
    DirectiveModule,
    LearningEnvironmentModule,
  ],
  declarations: [
    HomeComponent,
    HomeSlideComponent,
    HomeStudyMetutorsComponent,
    HomeCoursesComponent,
    HomeFeaturedTutorsComponent,
  ],
  providers: [],
})
export class HomeModule {}
