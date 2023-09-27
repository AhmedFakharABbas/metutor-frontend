import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './get-started.component';

const routes: Routes = [
    {
        path: '',
        component: GetStartedComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        GetStartedComponent,
    ],
    providers: []
})
export class GetStartedModule { }