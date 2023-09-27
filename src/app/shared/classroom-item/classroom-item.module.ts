import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomItemComponent } from './classroom-item.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '../_directives/directive.module';

@NgModule({
  declarations: [ClassroomItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    RouterModule,
    DirectiveModule,
  ],
  exports: [ClassroomItemComponent],
})
export class ClassroomItemModule {}
