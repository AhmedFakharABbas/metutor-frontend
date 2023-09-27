import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsOnlineTutoringComponent } from './benefits-online-tutoring.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BenefitsOnlineTutoringComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [BenefitsOnlineTutoringComponent],
})
export class BenefitsOnlineTutoringModule {}
