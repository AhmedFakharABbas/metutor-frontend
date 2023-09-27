import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import {
  AcademicTutoringTextbook,
  TEXTBOOK_EDITION_CONST,
} from 'src/app/config';
import { AlertNotificationService } from 'src/app/shared';
import { formatBytes } from 'src/app/utils';

@Component({
  selector: 'metutors-course-information-form',
  templateUrl: './course-information-form.component.html',
  styleUrls: ['./course-information-form.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class CourseInformationFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() courseLevel: any[];
  @Input() courseField: any[];
  @Input() languages: any[];
  @Input() subjects: any[];
  @Output() submitForm = new EventEmitter<FormGroup>();
  academicTutoringTextbook = AcademicTutoringTextbook;
  textbookEditions = TEXTBOOK_EDITION_CONST;
  filePreview: any;

  constructor(private alertNotificationService: AlertNotificationService) {}

  ngOnInit(): void {}

  onChange(event): void {
    const value = event.value;

    if (value === this.academicTutoringTextbook.info) {
      this.name.setValidators([Validators.required]);
      this.edition.setValidators([Validators.required]);
      this.author.setValidators([Validators.required]);
      this.file.setValidators([]);
    } else if (value === this.academicTutoringTextbook.pdf) {
      this.name.setValidators([]);
      this.edition.setValidators([]);
      this.author.setValidators([]);
      this.file.setValidators([Validators.required]);
    } else {
      this.name.setValidators([]);
      this.edition.setValidators([]);
      this.author.setValidators([]);
      this.file.setValidators([]);
    }

    this.name.updateValueAndValidity();
    this.edition.updateValueAndValidity();
    this.author.updateValueAndValidity();
    this.file.updateValueAndValidity();
  }

  returnZero(): number {
    return 0;
  }

  get field(): AbstractControl | null {
    return this.form.get('courseField');
  }

  get information(): AbstractControl | null {
    return this.form.get('information');
  }

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get edition(): AbstractControl | null {
    return this.form.get('edition');
  }

  get author(): AbstractControl | null {
    return this.form.get('author');
  }

  get file(): AbstractControl | null {
    return this.form.get('file');
  }

  onFileUpload(event) {
    if (event.target && event.target.files && event.target.files.length) {
      const file = (event.target as HTMLInputElement).files[0];
      if (file.size > 5 * 1024 * 1024) {
        this.alertNotificationService.error('Allowed file size is 5MB');
        return false;
      }

      this.form.patchValue({ file });
      this.form.get('file').updateValueAndValidity();
      this.filePreview = {
        name: file.name,
        size: formatBytes(file.size),
      };
    }
  }

  onSubmit(form: FormGroup): void {
    this.submitForm.emit(form);
  }
}
