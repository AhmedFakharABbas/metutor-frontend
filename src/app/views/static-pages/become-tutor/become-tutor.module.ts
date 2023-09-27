import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BecomeTutorComponent } from './become-tutor.component';
import { BecomeTutorSlideComponent } from './_components/slide/slide.component';
import { BecomeTutorsUsComponent } from './_components/become-tutors-us/become-tutors-us.component';
import { BecomeTutorWhyTeachingUsComponent } from './_components/why-teaching-us/why-teaching-us.component';
import { RequestPostCourseComponent } from './_components/request-post-course/request-post-course.component';
import { ExceptionalOpportunitiesComponent } from './_components/exceptional-opportunities/exceptional-opportunities.component';
import { LovingOpportunitiesComponent } from './_components/loving-opportunities/loving-opportunities.component';
import { BecomeOnlineTutorComponent } from './_components/become-online-tutor/become-online-tutor.component';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import { VideoPlayerModule } from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: BecomeTutorComponent,
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
    DirectiveModule,
  ],
  declarations: [
    BecomeTutorComponent,
    BecomeTutorsUsComponent,
    BecomeTutorSlideComponent,
    BecomeTutorWhyTeachingUsComponent,
    RequestPostCourseComponent,
    ExceptionalOpportunitiesComponent,
    LovingOpportunitiesComponent,
    BecomeOnlineTutorComponent,
  ],
  providers: [],
})
export class BecomeTutorModule {}
