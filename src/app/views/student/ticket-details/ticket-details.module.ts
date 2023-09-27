import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketDetailsComponent } from './ticket-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportService } from 'src/app/_api';
import { MatIconModule } from '@angular/material/icon';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';

const routes: Routes = [
  {
    path: '',
    component: TicketDetailsComponent,
  },
];

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxAutoScrollModule,
    DirectiveModule,
  ],
  providers: [SupportService],
})
export class TicketDetailsModule {}
