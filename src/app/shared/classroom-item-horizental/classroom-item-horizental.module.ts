import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomItemHorizentalComponent } from './classroom-item-horizental.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClassroomDetailsPopupModule } from '../_popups';
import { DirectiveModule } from '../_directives/directive.module';

@NgModule({
  declarations: [ClassroomItemHorizentalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ClassroomDetailsPopupModule,
    DirectiveModule,
  ],
  exports: [ClassroomItemHorizentalComponent],
})
export class ClassroomItemHorizentalModule {}
