import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './faq.component';
import {
  FaqSearchComponent,
  ListQuestionsComponent,
  StillHaveQuestionsComponent,
} from './_components';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SupportService } from 'src/app/_api';
import { FaqTicketComponent } from './faq-ticket/faq-ticket.component';
import { SelectFaqTopicComponent } from './_components/select-faq-topic/select-faq-topic.component';

const routes: Routes = [
  {
    path: '',
    component: FAQComponent,
  },
  {
    path: ':ticket',
    component: FaqTicketComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    FAQComponent,
    FaqTicketComponent,
    FaqSearchComponent,
    ListQuestionsComponent,
    StillHaveQuestionsComponent,
    SelectFaqTopicComponent,
  ],
  providers: [SupportService],
})
export class FAQModule {}
