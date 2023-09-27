import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tutor } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TutorsService {
  mainLink = environment.API_URL + 'tutor/';

  constructor(private http: HttpClient) {}

  fetchFeaturedTutors() {
    return this.http
      .get<{ results: Tutor[] }>(`${this.mainLink}featured_tutors/`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Tutor(false, item));
        })
      );
  }

  getTutorById(id: number) {
    return this.http.get<Tutor>(`${this.mainLink}profile/${id}/`).pipe(
      map((response) => {
        return new Tutor(false, response);
      })
    );
  }

  generateTutors(value) {
    return this.http
      .post<{ result: Tutor[] }>(`${this.mainLink}check_availability/`, value)
      .pipe(
        map((response) => {
          return response.result.map((item) => new Tutor(false, item));
        })
      );
  }

  sendTutorFeedback(value) {
    return this.http.post(
      `${this.mainLink}rate/?batch_id=${value?.classroomId}&tutor_id=${value?.tutorId}`,
      {
        expert_in_the_subject: value?.expertSubject,
        present_complex_topics_clearly_and_easily: value?.presentTopics,
        skillful_in_engaging_students: value?.skillfulStudents,
        always_on_time: value?.alwaysTime,
        feedback: value?.feedback,
      }
    );
  }
}
