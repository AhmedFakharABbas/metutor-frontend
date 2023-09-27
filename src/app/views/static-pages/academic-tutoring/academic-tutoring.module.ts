import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicTutoringComponent } from './academic-tutoring.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LearningEnvironmentModule } from 'src/app/shared';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import {
  AcademicTutoringSlideComponent,
  TestimonialComponent,
  BenefitsTutoringComponent,
  ChoosePlanComponent,
  FactsStatisticsComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: AcademicTutoringComponent,
  },
];

@NgModule({
  declarations: [
    AcademicTutoringComponent,
    AcademicTutoringSlideComponent,
    TestimonialComponent,
    BenefitsTutoringComponent,
    ChoosePlanComponent,
    FactsStatisticsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    LearningEnvironmentModule,
    DirectiveModule,
  ],
})
export class AcademicTutoringModule {}
