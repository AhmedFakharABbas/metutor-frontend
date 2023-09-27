export class IClass {
  id: number;
  number: number;
  title: string;
  subject: string;
  attendees: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;

  constructor(createDefault = false, classroom: any = null) {
    if (createDefault) {
      this.id = 0;
      this.number = 0;
      this.title = '';
      this.attendees = '';
      this.date = '';
      this.startTime = '';
      this.endTime = '';
      this.duration = 0;
    }
    if (classroom) {
      this.id = classroom._status_id;
      this.number = classroom.number;
      this.title = classroom.title;
      this.subject = classroom.subject;
      this.attendees = classroom.seat_attendees;
      this.date = classroom._date;
      this.startTime = classroom._class_start_time || classroom.start_time;
      this.endTime = classroom._class_end_time || classroom.end_time;
      this.duration = classroom.duration || 0;
    }
  }
}
