import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgProgressModule } from '@ngx-progressbar/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/auth/auth.interceptor';
import { SidebarModule } from 'primeng/sidebar';
import { DirectiveModule } from './shared/_directives';
import { MomentModule } from 'ngx-moment';
import { MatMenuModule } from '@angular/material/menu';
import {
  AlertNotificationsModule,
  FooterComponent,
  NavbarComponent,
  NavbarMobileComponent,
  StudentSidebarComponent,
  StudentNavbarComponent,
  TutorSidebarComponent,
  TutorNavbarComponent,
} from './shared';
import {
  StudentLayoutComponent,
  WebsiteLayoutComponent,
  ClassroomLayoutComponent,
  HelpLayoutComponent,
  TutorLayoutComponent,
} from './views/_layouts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    StudentLayoutComponent,
    WebsiteLayoutComponent,
    StudentSidebarComponent,
    StudentNavbarComponent,
    ClassroomLayoutComponent,
    HelpLayoutComponent,
    TutorLayoutComponent,
    TutorSidebarComponent,
    TutorNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertNotificationsModule,
    SidebarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    DirectiveModule,
    MomentModule,
    MatMenuModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'right',
      color: '#3bb3c1',
      direction: 'ltr+',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
