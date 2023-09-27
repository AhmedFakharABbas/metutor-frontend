import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Statistics } from '../models';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  mainLink = environment.API_URL + 'misc/';

  constructor(private http: HttpClient) {}

  fetchTestmonials() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}student_success_testimonials/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchOpportunities() {
    return this.http
      .get<{ results: any }>(
        `${this.mainLink}become_a_tutor_tutors_testimonials/`
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchAboutStatistics() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}about_us_statistics/`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Statistics(false, item));
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchTutorStatistics() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}become_a_tutor_statistics/`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Statistics(false, item));
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchValuesStatistics() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}about_us_metutors_values/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchWhyMeTutors() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}about_us_why_metutors/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchWhyWeTeach() {
    return this.http
      .get<{ results: any[] }>(`${this.mainLink}about_us_what_we_teach/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchInnovateApproach() {
    return this.http
      .get<{ results: any[] }>(
        `${this.mainLink}about_us_our_innovative_approach/`
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchFounders() {
    return this.http
      .get<{ results: any[] }>(`${this.mainLink}about_us_founders/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchBecomeTutors() {
    return this.http
      .get<{ results: any[] }>(
        `${this.mainLink}become_a_tutor_why_become_a_tutor/`
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchWhyTeachingUs() {
    return this.http
      .get<{ results: any[] }>(
        `${this.mainLink}become_a_tutor_why_teach_with_us/`
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchRequestCoursesList() {
    return this.http
      .get<{ results: any[] }>(
        `${this.mainLink}become_a_tutor_how_to_request_new_course/`
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchSystemInfoDetails() {
    return this.http
      .get<any>(`${this.mainLink}system_detail_info/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchLangCourseIntroduction() {
    return this.http
      .get<any>(`${this.mainLink}languages_courses_introducing/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchPrepCollageIntroducing() {
    return this.http
      .get<any>(`${this.mainLink}prep_collage_introducing/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchAcademicTutoringBenefits() {
    return this.http
      .get<any>(`${this.mainLink}academic_tutoring_benefits/`)
      .pipe(catchError(this.errorHandler));
  }

  fetchAcademicTutoringStatistics() {
    return this.http
      .get<{ results: any }>(`${this.mainLink}academic_tutoring_statistics/`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Statistics(false, item));
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  fetchLanguages() {
    return this.http
      .get(`${this.mainLink}languages/`)
      .pipe(
        map((response) => {
          return Object.keys(response).map((key) => {
            const item = { id: key, name: response[key] };
            return item;
          });
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  _fetchAcademicTutoringPrice() {
    return this.http
      .get<any>(`${this.mainLink}academic_tutoring_price_conf/`)
      .pipe(
        map((response) => {
          return {
            oneOnOne: response?.one_on_one_price_per_hour,
            groupStudy: response?.group_of_study_price_per_hour,
          };
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
