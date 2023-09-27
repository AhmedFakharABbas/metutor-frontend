import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SupportTicketComponent } from './support-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SupportService } from 'src/app/_api';

const routes: Routes = [
  {
    path: '',
    component: SupportTicketComponent,
  },
];

@NgModule({
  declarations: [SupportTicketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [SupportService],
})
export class SupportTicketModule {}
