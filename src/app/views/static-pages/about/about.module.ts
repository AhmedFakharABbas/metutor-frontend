import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import { StartLearningNowModule } from 'src/app/shared';
import {
  MeTutorsValuesComponent,
  WhyMeTutorsComponent,
  AboutSlideComponent,
  WhyWeTeachComponent,
  InnovativeApproachComponent,
  FounderTeamComponent,
} from './_components';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    StartLearningNowModule,
    DirectiveModule,
  ],
  declarations: [
    AboutComponent,
    AboutSlideComponent,
    MeTutorsValuesComponent,
    WhyMeTutorsComponent,
    WhyWeTeachComponent,
    InnovativeApproachComponent,
    FounderTeamComponent,
  ],
  providers: [],
})
export class AboutModule {}
