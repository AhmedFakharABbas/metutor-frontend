import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultAvatarDirective } from './default-avatar.directive';
import { DefaultCourseDirective } from './default-course.directive';
import { TrimInputDirective } from './trim-input.directive';

@NgModule({
  declarations: [
    DefaultAvatarDirective,
    DefaultCourseDirective,
    TrimInputDirective,
  ],
  imports: [CommonModule],
  exports: [DefaultAvatarDirective, DefaultCourseDirective, TrimInputDirective],
})
export class DirectiveModule {}
