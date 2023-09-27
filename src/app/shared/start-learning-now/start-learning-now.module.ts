import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartLearningNowComponent } from './start-learning-now.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StartLearningNowComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [StartLearningNowComponent],
})
export class StartLearningNowModule {}
