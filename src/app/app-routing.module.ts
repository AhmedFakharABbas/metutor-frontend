import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuard,
  NotAuthGuard,
  StudentAuthGuard,
  TutorAuthGuard,
} from 'src/app/auth/_guards';
import {
  ClassroomLayoutComponent,
  HelpLayoutComponent,
  StudentLayoutComponent,
  WebsiteLayoutComponent,
  TutorLayoutComponent,
} from './views/_layouts';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WebsiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./views/home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'signin',
            canActivate: [NotAuthGuard],
            loadChildren: () =>
              import('./auth/signin/signin.module').then((m) => m.SigninModule),
          },
          {
            path: 'signup',
            canActivate: [NotAuthGuard],
            loadChildren: () =>
              import('./auth/signup/signup.module').then((m) => m.SignupModule),
          },
          {
            path: 'confirm-email',
            canActivate: [NotAuthGuard],
            loadChildren: () =>
              import('./auth/confirm-email/confirm-email.module').then(
                (m) => m.ConfirmEmailModule
              ),
          },
          {
            path: 'forget-password',
            canActivate: [NotAuthGuard],
            loadChildren: () =>
              import('./auth/forget-password/forget-password.module').then(
                (m) => m.ForgetPasswordModule
              ),
          },
          {
            path: 'reset-password',
            canActivate: [NotAuthGuard],
            loadChildren: () =>
              import('./auth/reset-password/reset-password.module').then(
                (m) => m.ResetPasswordModule
              ),
          },
          {
            path: 'welcome',
            canActivate: [AuthGuard],
            loadChildren: () =>
              import('./auth/welcome/welcome.module').then(
                (m) => m.WelcomeModule
              ),
          },
          {
            path: 'about',
            loadChildren: () =>
              import('./views/static-pages/about/about.module').then(
                (m) => m.AboutModule
              ),
          },
          {
            path: 'languages-courses',
            loadChildren: () =>
              import('./views/static-pages/languages/languages.module').then(
                (m) => m.LanguagesModule
              ),
          },
          {
            path: 'prep-college-admission-tests',
            loadChildren: () =>
              import(
                './views/static-pages/prep-college/prep-college.module'
              ).then((m) => m.PrepCollegeModule),
          },
          {
            path: 'academic-tutoring',
            loadChildren: () =>
              import(
                './views/static-pages/academic-tutoring/academic-tutoring.module'
              ).then((m) => m.AcademicTutoringModule),
          }, // Finish responsive here
          {
            path: 'become-tutor',
            loadChildren: () =>
              import(
                './views/static-pages/become-tutor/become-tutor.module'
              ).then((m) => m.BecomeTutorModule),
          },
          {
            path: 'student-success',
            loadChildren: () =>
              import(
                './views/static-pages/student-success/student-success.module'
              ).then((m) => m.StudentSuccessModule),
          },
          {
            path: 'get-started',
            loadChildren: () =>
              import(
                './views/static-pages/get-started/get-started.module'
              ).then((m) => m.GetStartedModule),
          },
          {
            path: 'contact',
            loadChildren: () =>
              import('./views/static-pages/contact/contact.module').then(
                (m) => m.ContactModule
              ),
          },
          {
            path: 'faq',
            loadChildren: () =>
              import('./views/static-pages/faq/faq.module').then(
                (m) => m.FAQModule
              ),
          },
          {
            path: 'all-courses/:categoryId',
            loadChildren: () =>
              import('./views/all-courses/all-courses.module').then(
                (m) => m.AllCoursesModule
              ),
          },
          {
            path: 'classrooms',
            children: [
              {
                path: 'customize/:id',
                canActivate: [AuthGuard],
                loadChildren: () =>
                  import(
                    './views/classrooms/customize-classroom/customize-classroom.module'
                  ).then((m) => m.CustomizeClassroomModule),
              },
              {
                path: ':id',
                loadChildren: () =>
                  import('./views/classrooms/classrooms.module').then(
                    (m) => m.ClassroomsModule
                  ),
              },
            ],
          },
          {
            path: 'tutor-profile/:id',
            canActivate: [AuthGuard],
            loadChildren: () =>
              import('./views/tutor/tutor-profile/tutor-profile.module').then(
                (m) => m.TutorProfileModule
              ),
          },
          {
            path: 'payment',
            children: [
              {
                path: 'invoice-details/:id',
                loadChildren: () =>
                  import(
                    './views/payments/invoice-details/invoice-details.module'
                  ).then((m) => m.InvoiceDetailsModule),
              },
            ],
          },
          {
            path: 'request-tutor',
            canActivate: [StudentAuthGuard],
            loadChildren: () =>
              import('./views/student/request-tutor/request-tutor.module').then(
                (m) => m.RequestTutorModule
              ),
          },
        ],
      },
      {
        path: 'student',
        component: StudentLayoutComponent,
        canActivate: [StudentAuthGuard],
        children: [
          {
            path: 'classroom',
            canActivate: [StudentAuthGuard],
            children: [
              {
                path: '',
                canActivate: [StudentAuthGuard],
                loadChildren: () =>
                  import(
                    './views/student/classroom/homepage/classroom.module'
                  ).then((m) => m.ClassroomModule),
              },
              {
                path: '',
                canActivate: [StudentAuthGuard],
                component: ClassroomLayoutComponent,
                children: [
                  {
                    path: 'syllabus/:id',
                    canActivate: [StudentAuthGuard],
                    loadChildren: () =>
                      import(
                        './views/student/classroom/syllabus/syllabus.module'
                      ).then((m) => m.SyllabusModule),
                  },
                  {
                    path: 'classes-dashboard/:id',
                    canActivate: [StudentAuthGuard],
                    loadChildren: () =>
                      import(
                        './views/student/classroom/classes-dashboard/classes-dashboard.module'
                      ).then((m) => m.ClassesDashboardModule),
                  },
                ],
              },
            ],
          },
          {
            path: 'help',
            canActivate: [StudentAuthGuard],
            component: HelpLayoutComponent,
            children: [
              {
                path: 'faq',
                canActivate: [StudentAuthGuard],
                loadChildren: () =>
                  import('./views/student/faq/faq.module').then(
                    (m) => m.FAQModule
                  ),
              },
              {
                path: 'support-ticket',
                canActivate: [StudentAuthGuard],
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import(
                        './views/student/my-tickets/my-tickets.module'
                      ).then((m) => m.MyTicketsModule),
                  },
                  {
                    path: 'create-ticket',
                    canActivate: [StudentAuthGuard],
                    loadChildren: () =>
                      import(
                        './views/student/support-ticket/support-ticket.module'
                      ).then((m) => m.SupportTicketModule),
                  },
                  {
                    path: 'ticket-details/:id',
                    canActivate: [StudentAuthGuard],
                    loadChildren: () =>
                      import(
                        './views/student/ticket-details/ticket-details.module'
                      ).then((m) => m.TicketDetailsModule),
                  },
                ],
              },
              {
                path: '',
                redirectTo: '/student/help/faq',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'dashboard',
            canActivate: [StudentAuthGuard],
            loadChildren: () =>
              import('./views/student/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'certificates',
            canActivate: [StudentAuthGuard],
            loadChildren: () =>
              import('./views/student/certificates/certificates.module').then(
                (m) => m.CertificatesModule
              ),
          },
          {
            path: 'settings',
            canActivate: [StudentAuthGuard],
            loadChildren: () =>
              import('./views/student/settings/settings.module').then(
                (m) => m.SettingsModule
              ),
          },
          {
            path: '',
            redirectTo: '/student/classroom',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'tutor',
        component: TutorLayoutComponent,
        canActivate: [TutorAuthGuard],
        children: [
          {
            path: 'dashboard',
            canActivate: [TutorAuthGuard],
            loadChildren: () =>
              import('./views/tutor/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'settings',
            canActivate: [TutorAuthGuard],
            loadChildren: () =>
              import('./views/tutor/settings/settings.module').then(
                (m) => m.SettingsModule
              ),
          },
          {
            path: 'payment-records',
            canActivate: [TutorAuthGuard],
            loadChildren: () =>
              import(
                './views/tutor/payment-records/payment-records.module'
              ).then((m) => m.PaymentRecordsModule),
          },
          {
            path: '',
            redirectTo: '/tutor/classroom',
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard, NotAuthGuard, TutorAuthGuard, StudentAuthGuard],
})
export class AppRoutingModule {}
