import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectiveModule } from '../_directives/directive.module';

@NgModule({
  declarations: [CourseItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    DirectiveModule,
  ],
  exports: [CourseItemComponent],
})
export class CourseItemModule {}
