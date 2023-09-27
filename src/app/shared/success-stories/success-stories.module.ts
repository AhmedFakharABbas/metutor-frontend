import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessStoriesComponent } from './success-stories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from '../_directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RatingModule.forRoot(),
    FormsModule,
    DirectiveModule,
  ],
  declarations: [SuccessStoriesComponent],
  exports: [SuccessStoriesComponent],
})
export class SuccessStoriesModule {}
