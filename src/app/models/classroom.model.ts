import { ClassroomType } from '../config';
import { DAYS_WEEK } from '../utils';
import { Course } from './course.model';
import { Tutor } from './tutor.model';

export class Classroom {
  id: number;
  course: Course;
  name: string;
  slug: string;
  number: number;
  totalClasses: number;
  totalHours: number;
  type: number;
  oneOneTuitionPriceInHour: number;
  groupTuitionPriceInHour: number;
  price: number;
  maxStudentsGroup: number;
  installmentsInd: boolean;
  totalInstallments: number;
  firstInstallment: any;
  startDate: string;
  expectedEndDate: string;
  days: string[];
  listDays: string[];
  startTime: string;
  endTime: string;
  startETime: Date;
  endETime: Date;
  status: number;
  tutor: Tutor;
  progress: number;
  completedClasses: number;
  remainingClasses: number;
  isComplete: boolean;

  constructor(createDefault = false, classroom: any = null) {
    if (createDefault) {
      this.id = 0;
      this.course = new Course(false);
      this.name = '';
      this.slug = '';
      this.number = 0;
      this.totalClasses = 0;
      this.totalHours = 0;
      this.type = 0;
      this.oneOneTuitionPriceInHour = 0;
      this.groupTuitionPriceInHour = 0;
      this.price = 0;
      this.maxStudentsGroup = 0;
      this.installmentsInd = false;
      this.totalInstallments = 0;
      this.firstInstallment = 0;
      this.startDate = '';
      this.expectedEndDate = '';
      this.days = [];
      this.listDays = [];
      this.startTime = '';
      this.endTime = '';
      this.startETime = new Date();
      this.endETime = new Date();
      this.status = 0;
      this.tutor = new Tutor(false);
      this.progress = 0;
      this.completedClasses = 0;
      this.remainingClasses = 0;
      this.isComplete = false;
    }
    if (classroom) {
      this.id = classroom.id;
      this.course = new Course(false, classroom.course);
      this.name = classroom.name || '';
      this.slug = classroom.slug || '';
      this.number = classroom.number || 0;
      this.totalClasses = classroom.total_classes || 0;
      this.totalHours = classroom.total_hours || 0;
      this.type = classroom.batch_type || 0; // 1:1 , Group
      this.oneOneTuitionPriceInHour =
        classroom.one_2_one_tuition_price_in_hour || 0;
      this.groupTuitionPriceInHour = classroom.group_tuition_price_in_hour || 0;
      this.price = calculatePrice(
        classroom.batch_type,
        classroom.one_2_one_tuition_price_in_hour,
        classroom.group_tuition_price_in_hour
      );
      this.maxStudentsGroup = classroom.max_students_in_group || 0;
      this.installmentsInd = classroom.installments_ind || false;
      this.totalInstallments = classroom.total_installments || 0;
      this.firstInstallment = classroom.first_installment;
      this.startDate = classroom.batch_start_date || '';
      this.expectedEndDate = classroom.batch_expected_end_date || '';
      this.days = classroom.batch_days || [];
      this.listDays = calculateListDays(classroom.batch_days);
      this.startTime = classroom.batch_start_time || '';
      this.endTime = classroom.batch_end_time || '';
      this.startETime = classroom.batch_start_time
        ? new Date('01-01-2017 ' + classroom.batch_start_time)
        : new Date();
      this.endETime = classroom.batch_end_time
        ? new Date('01-01-2017 ' + classroom.batch_end_time)
        : new Date();
      this.status = classroom.batch_status || false;
      this.tutor = new Tutor(false, classroom.tutor);
      this.progress = classroom.progress || 0;
      this.completedClasses = classroom.completed_classes || 0;
      this.remainingClasses = classroom.remaining_classes || 0;
      this.isComplete = classroom?.is_complete || false;
    }
  }
}

export function calculatePrice(
  type: number,
  oneOneTuitionPriceInHour: number,
  groupTuitionPriceInHour: number
) {
  if (type === ClassroomType.one) return oneOneTuitionPriceInHour || 0;
  else return groupTuitionPriceInHour || 0;
}

export function calculateListDays(days) {
  let list = [];
  days.forEach((day) => {
    list.push(DAYS_WEEK[day]);
  });

  return list;
}
