import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRecordsComponent } from './payment-records.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: PaymentRecordsComponent,
  },
];
@NgModule({
  declarations: [PaymentRecordsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
})
export class PaymentRecordsModule {}
