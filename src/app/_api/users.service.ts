import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Role } from '../models/role.model';

const BACKEND_URL = environment.API_URL;
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUserLocation(): any {
    // @ts-ignore
    return dbip.getVisitor();
  }
  public getRoles() {
    return this.http.get<any>(BACKEND_URL + `roles`);
  }
}
