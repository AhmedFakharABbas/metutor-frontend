import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './invoice-details.component';
import { ClassroomDetailsComponent } from './_components';

const routes: Routes = [
  {
    path: '',
    component: InvoiceDetailsComponent,
  },
];

@NgModule({
  declarations: [InvoiceDetailsComponent, ClassroomDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
})
export class InvoiceDetailsModule {}
