import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';
import { MatIconModule } from '@angular/material/icon';
import {
  AboutStudentsComponent,
  ListQuestionsComponent,
  StillHaveQuestionsComponent,
} from './_components';
import { SupportService } from 'src/app/_api';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
  },
];

@NgModule({
  declarations: [
    FaqComponent,
    ListQuestionsComponent,
    AboutStudentsComponent,
    StillHaveQuestionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
  ],
  providers: [SupportService],
})
export class FAQModule {}
