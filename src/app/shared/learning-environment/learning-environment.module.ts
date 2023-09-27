import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningEnvironmentComponent } from './learning-environment.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LearningEnvironmentComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LearningEnvironmentComponent],
})
export class LearningEnvironmentModule {}
