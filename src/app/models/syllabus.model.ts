import { IClass } from './class.model';

export class Syllabus {
  id: number;
  batch: number;
  title: string;
  description: string;
  totalHours: number;
  progress: number;
  classes: IClass[];

  constructor(createDefault = false, syllabus: any = null) {
    if (createDefault) {
      this.id = 0;
      this.batch = 0;
      this.title = '';
      this.description = '';
      this.totalHours = 0;
      this.progress = 0;
      this.classes = [];
    }
    if (syllabus) {
      this.id = syllabus.id;
      this.batch = syllabus.batch || 0;
      this.title = syllabus.title || '';
      this.description = syllabus.description || '';
      this.totalHours = syllabus.total_hours || 0;
      this.progress = syllabus.progress || 0;
      this.classes =
        syllabus.classes && syllabus.classes.length
          ? syllabus.classes.map((clss) => new IClass(false, clss))
          : [];
    }
  }
}
