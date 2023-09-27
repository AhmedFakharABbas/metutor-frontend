import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorProfileComponent } from './tutor-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';
import { MomentModule } from 'ngx-moment';
import {
  ProfileAboutMeComponent,
  ProfileFeedbackRatingsComponent,
  ProfileHeaderComponent,
  ProfileLanguagesComponent,
  ProfileShareComponent,
  ProfileSpecializationComponent,
  ProfileTutorBadgesComponent,
} from './_components';

const routes: Routes = [
  {
    path: '',
    component: TutorProfileComponent,
  },
];

@NgModule({
  declarations: [
    TutorProfileComponent,
    ProfileHeaderComponent,
    ProfileAboutMeComponent,
    ProfileLanguagesComponent,
    ProfileSpecializationComponent,
    ProfileShareComponent,
    ProfileFeedbackRatingsComponent,
    ProfileTutorBadgesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    RatingModule,
    FormsModule,
    ShareButtonsModule,
    DirectiveModule,
    MomentModule,
  ],
})
export class TutorProfileModule {}
