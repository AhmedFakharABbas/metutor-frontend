import { simpleNumber } from './../utils';

export class Statistics {
  id: number;
  type: string;
  value: number | string;
  icon: string;

  constructor(createDefault = false, about: any = null) {
    if (createDefault) {
      this.id = 0;
      this.type = '';
      this.value = 0;
      this.icon = '';
    }
    if (about) {
      this.id = about.id;
      this.type = about.statistic_type || '';
      this.value = simpleNumber(+about.value) || '';
      this.icon = about.icon || '';
    }
  }
}
