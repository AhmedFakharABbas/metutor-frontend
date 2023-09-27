import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GMapModule } from 'primeng/gmap';
import { ContactComponent } from './contact.component';
import { HelpToHereComponent, SendMessageComponent } from './_components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactService } from 'src/app/_api';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GMapModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [ContactComponent, HelpToHereComponent, SendMessageComponent],
  providers: [ContactService],
})
export class ContactModule {}
