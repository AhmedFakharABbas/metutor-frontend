import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTicketsComponent } from './my-tickets.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SupportService } from 'src/app/_api';
import { DirectiveModule } from 'src/app/shared/_directives/directive.module';

const routes: Routes = [
  {
    path: '',
    component: MyTicketsComponent,
  },
];

@NgModule({
  declarations: [MyTicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    DirectiveModule,
  ],
  providers: [SupportService],
})
export class MyTicketsModule {}
