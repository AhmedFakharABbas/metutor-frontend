import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorItemComponent } from './tutor-item.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DirectiveModule } from '../_directives/directive.module';

@NgModule({
  declarations: [TutorItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    MatButtonModule,
    MatIconModule,
    DirectiveModule,
  ],
  exports: [TutorItemComponent],
})
export class TutorItemModule {}
