import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OpinionsComponent } from './opinions.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';

@NgModule({
  declarations: [OpinionsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RatingModule.forRoot(),
    DirectiveModule,
  ],
  exports: [OpinionsComponent],
})
export class OpinionsModule {}
