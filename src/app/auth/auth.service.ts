import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { UserRole } from '../config';
import { Router } from '@angular/router';

// const BACKEND_URL = environment.API_URL + 'auth/';
const BACKEND_URL = environment.API_URL;
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth(): boolean {
    const token = localStorage.getItem('token');
    let jwtHelper = new JwtHelperService();
    if (!token) return false;
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  getIsStudentAuth(): boolean {
    if (this.getIsAuth()) {
      const token = localStorage.getItem('token');
      let jwtHelper = new JwtHelperService();
      const userRole = jwtHelper.decodeToken(token)?.role;

      if (userRole === UserRole.student) return true;
      else return false;
    } else return false;
  }

  getIsTutorAuth(): boolean {
    if (this.getIsAuth()) {
      const token = localStorage.getItem('token');
      let jwtHelper = new JwtHelperService();
      const userRole = jwtHelper.decodeToken(token)?.role;

      if (userRole === UserRole.tutor) return true;
      else return false;
    } else return false;
  }

  decodeToken(): any {
    if (this.getIsAuth()) {
      const token = localStorage.getItem('token');
      let jwtHelper = new JwtHelperService();
      return jwtHelper.decodeToken(token);
    } else {
      return {};
    }
  }

  login(value) {
    return this.http.post<{ token: string; refresh: string; role: string }>(
      BACKEND_URL + 'login',
      value
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    this.router.navigate(['/']);
  }

  registerTutor(value) {
    const sendData = this.registerUser(value);
    return this.http.post<{ message: string }>(
      environment.API_URL + 'tutor/register/',
      sendData
    );
  }

  registerStudent(value) {
    const sendData = this.registerUser(value);
    return this.http.post<{ message: string }>(
      environment.API_URL + 'student/register/',
      sendData
    );
  }

  forgetPassword(email: string) {
    return this.http.post<{ message: string }>(
      BACKEND_URL + 'password-reset/',
      { email }
    );
  }

  resetPassword(value) {
    return this.http.post<{ message: string }>(
      BACKEND_URL + 'password-reset/confirm/',
      value
    );
  }

  confirmEmail(value) {
    return this.http.get<{ status_code: number }>(
      BACKEND_URL + `activate/${value.uid}/${value.token}/`
    );
  }

  resendEmailConfirm(value) {
    return this.http.post<{ status_code: number }>(
      BACKEND_URL + 'resend-activation-link/',
      value
    );
  }

  registerUser(user: any) {
    return {
      ...user,
      first_name: user.firstName,
      last_name: user.lastName,
      mobile_number: user.mobileNumber,
    };
  }
}
