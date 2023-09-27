import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class StudentAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsStudentAuth();
    if (!isAuth) {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh-token');
      this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    }
    return isAuth;
  }
}
