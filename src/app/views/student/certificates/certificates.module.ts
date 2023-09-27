import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';

const routes: Routes = [
  {
    path: '',
    component: CertificatesComponent,
  },
];

@NgModule({
  declarations: [CertificatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    RatingModule,
    FormsModule,
    DirectiveModule,
  ],
})
export class CertificatesModule {}
