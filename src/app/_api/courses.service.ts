import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Classroom, IClass, Course, ICategory, Syllabus } from '../models';
import { catchError, map } from 'rxjs/operators';
import { AcademicTutoringTextbook } from 'src/app/config';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  mainLink = environment.API_URL + 'course/';

  constructor(private http: HttpClient) {}

  fetchMainServices() {
    return this.http.get<{ results: ICategory[] }>(`${this.mainLink}category`);
  }

  fetchService(id: number) {
    return this.http.get<ICategory>(`${this.mainLink}category/${id}/`);
  }

  getCourseById(id: number) {
    return this.http.get<Course>(`${this.mainLink}${id}/`).pipe(
      map((response) => {
        return new Course(false, response);
      })
    );
  }

  getClassroomById(id: number) {
    return this.http.get<Course>(`${this.mainLink}batch/${id}/`).pipe(
      map((response) => {
        return new Classroom(false, response);
      })
    );
  }

  getSyllabusByCourseId(courseId: number) {
    return this.http
      .get<Syllabus[]>(`${this.mainLink}syllabus/?batch_id=${courseId}`)
      .pipe(
        map((response) => {
          return response.map((item) => new Syllabus(false, item));
        })
      );
  }

  fetchClassroomsQuery(query: any) {
    let params = new HttpParams();

    if (query.homePage) {
      params = params.append('home_page', query.homePage);
    }
    if (query.course) {
      params = params.append('course', query.course);
    }
    if (query.status) {
      params = params.append('status', query.status);
    }

    return this.http
      .get<{ count: number; results: Classroom[] }>(`${this.mainLink}batch/`, {
        params,
      })
      .pipe(
        map((response) => {
          return {
            count: response.count,
            classrooms: response.results.map(
              (item) => new Classroom(false, item)
            ),
          };
        })
      );
  }

  fetchCategoryCourses(id: number) {
    return this.http
      .get<{ results: Course[] }>(`${this.mainLink}?category=${id}`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Course(false, item));
        })
      );
  }

  fetchMyClassrooms() {
    return this.http
      .get<{ results: Classroom[] }>(`${this.mainLink}my_classrooms/`)
      .pipe(
        map((response) => {
          return response.results.map((item) => new Classroom(false, item));
        })
      );
  }

  filterServices(filters: any) {
    let params = new HttpParams();

    if (filters.categoryId) {
      params = params.append('category', filters.categoryId);
    }
    if (filters.key) {
      params = params.append('key', filters.key);
    }
    if (filters.rate) {
      params = params.append('rate', filters.rate);
    }
    if (filters.tags) {
      params = params.append('tags', filters.tags);
    }
    if (filters.startIn) {
      params = params.append('start_in', filters.startIn);
    }
    if (filters.tutoringType) {
      params = params.append('tutoring_type', filters.tutoringType);
    }
    if (filters.sort) {
      params = params.append('sort', filters.sort);
    }
    if (filters.page) {
      params = params.append('page', filters.page);
    }

    return this.http
      .get<{ results: Course[]; count: number }>(`${this.mainLink}`, { params })
      .pipe(
        map((response) => {
          return {
            courses: response.results.map((item) => new Course(false, item)),
            count: response.count,
          };
        })
      );
  }

  filterClassooms(filters: any) {
    let params = new HttpParams();

    if (filters.startTime) {
      params = params.append('batch_start_time', filters.startTime);
    }
    if (filters.endTime) {
      params = params.append('batch_expected_end_date', filters.endTime);
    }
    if (filters.maxStudents) {
      params = params.append('max_students_in_group', filters.maxStudents);
    }
    if (filters.days) {
      params = params.append('batch_days', (+filters.days - 1).toString());
    }
    if (filters.type) {
      params = params.append('batch_type', filters.type);
    }
    if (filters.startIn) {
      params = params.append('start_in', filters.startIn);
    }
    if (filters.page) {
      params = params.append('page', filters.page);
    }
    if (filters.sort) {
      params = params.append('sort', filters.sort);
    }

    return this.http
      .get<{ results: Classroom[]; count: number }>(`${this.mainLink}`, {
        params,
      })
      .pipe(
        map((response) => {
          return {
            classrooms: response.results.map(
              (item) => new Classroom(false, item)
            ),
            count: response.count,
          };
        })
      );
  }

  generateClassRooms(value) {
    const formData = new FormData();

    formData.append('batch_expected_end_date', value.endDate);
    formData.append('batch_start_date', value.startDate);
    formData.append('batch_days', value.days);
    formData.append('total_classes', value.classes);
    formData.append('seat_attendees', value.seatAttendees);
    formData.append('batch_start_time', value.startTime);
    formData.append('batch_end_time', value.endTime);

    return this.http
      .post<{ result: IClass[] }>(
        `${this.mainLink}academic_tutoring/generate_list_of_classes/`,
        formData
      )
      .pipe(
        map((response) => {
          return response.result.map((item) => new IClass(false, item));
        })
      );
  }

  createCourse(value) {
    const formData = new FormData();

    if (value.courseLevel) formData.append('course_level', value.courseLevel);
    if (value.courseField) formData.append('course_field', value.courseField);
    if (value.preferedTutoringLanguage)
      formData.append(
        'tutoring_preferred_language',
        value.preferedTutoringLanguage
      );
    if (value.subject) formData.append('subject', value.subject);
    if (value.information)
      formData.append('textbook_information', value.information);
    if (value.information === AcademicTutoringTextbook.pdf && value.file)
      formData.append('textbook_pdf', value.file);
    if (value.information === AcademicTutoringTextbook.info) {
      if (value.name) formData.append('textbook_name', value.name);
      if (value.edition) formData.append('textbook_edition', value.edition);
      if (value.author) formData.append('textbook_author', value.author);
    }

    if (value.startDate) formData.append('batch_start_date', value.startDate);
    if (value.endDate)
      formData.append('batch_expected_end_date', value.endDate);
    if (value.days) formData.append('batch_days', value.days);
    if (value.startTime) formData.append('batch_start_time', value.startTime);
    if (value.endTime) formData.append('batch_end_time', value.endTime);
    if (value.duration) formData.append('duration', value.duration);
    if (value.hours) formData.append('total_hours', value.hours);
    if (value.classes) formData.append('total_classes', value.classes);
    if (value.type) formData.append('batch_type', value.type);

    if (value.classrooms && value.classrooms.length)
      formData.append('classes', JSON.stringify(value.classrooms));

    if (value.tutor) formData.append('tutor', value.tutor);

    return this.http.post<{ result: { id: number } }>(
      `${this.mainLink}academic_tutoring/create_course/`,
      formData
    );
  }

  customizeClassroom(value) {
    const formData = new FormData();

    if (value.courseId) formData.append('course_id', value.courseId);
    if (value.courseName) formData.append('name', value.courseName);
    formData.append('tutoring_preferred_language', null);

    if (value.startDate) formData.append('batch_start_date', value.startDate);
    if (value.endDate)
      formData.append('batch_expected_end_date', value.endDate);
    if (value.days) formData.append('batch_days', value.days);
    if (value.startTime) formData.append('batch_start_time', value.startTime);
    if (value.endTime) formData.append('batch_end_time', value.endTime);
    if (value.hours) formData.append('total_hours', value.hours);
    if (value.classes) formData.append('total_classes', value.classes);
    if (value.type) formData.append('batch_type', value.type);

    if (value.classrooms && value.classrooms.length)
      formData.append('classes', JSON.stringify(value.classrooms));

    if (value.tutor) formData.append('tutor', value.tutor);

    return this.http.post<{ result: { id: number } }>(
      `${this.mainLink}customize_exist_course/`,
      formData
    );
  }

  sendCourseFeedback(value) {
    return this.http.post(
      `${this.mainLink}batch/course/rate/?batch_id=${value?.classroomId}`,
      {
        rate: value?.rate,
        feedback: value?.feedback,
      }
    );
  }

  _fetchCustomizeExistCoursePrice(courseId: number) {
    return this.http
      .get<any>(
        `${this.mainLink}customize_exist_course/estimated_price/?course_id=${courseId}`
      )
      .pipe(
        map((response) => {
          return {
            oneOnOne: response?.one_on_one_price_per_hour,
            groupStudy: response?.group_price_per_hour,
          };
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
