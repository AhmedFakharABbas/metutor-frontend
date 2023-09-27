import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemHorizentalComponent } from './course-item-horizental.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseDetailsPopupModule } from '../_popups';
import { DirectiveModule } from '../_directives/directive.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CourseItemHorizentalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CourseDetailsPopupModule,
    DirectiveModule,
    RouterModule,
  ],
  exports: [CourseItemHorizentalComponent],
})
export class CourseItemHorizentalModule {}
