import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContactService {
  mainLink = environment.API_URL + 'contact_us/';

  constructor(private http: HttpClient) {}

  createContact(value) {
    const formData = new FormData();
    formData.append('_name', value.name);
    formData.append('_from', value.email);
    formData.append('_subject', value.subject);
    formData.append('_message_content', value.message);
    if (value.file) formData.append('_attached_file', value.file);
    if (value.companyName) formData.append('_company_name', value.companyName);

    return this.http
      .post(this.mainLink, formData)
      // .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
