import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertItemComponent } from './alert-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaxPipe } from './max.pipe';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule],
    declarations: [AlertComponent, AlertItemComponent, MaxPipe],
    exports: [AlertComponent, AlertItemComponent]
})
export class AlertNotificationsModule { }