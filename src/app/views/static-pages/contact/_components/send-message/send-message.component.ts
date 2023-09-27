import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertNotificationService } from 'src/app/shared';
import { formatBytes } from 'src/app/utils/helpers';
import { ContactService } from 'src/app/_api';
declare var google: any;

@Component({
  selector: 'metutors-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
  @Output() submitContact = new EventEmitter();
  options: any;
  overlays: any[];
  contactForm: FormGroup;
  @Input() loading: boolean;
  filePreview: any;

  constructor(
    private _fb: FormBuilder,
    private alertNotificationService: AlertNotificationService
  ) {}

  ngOnInit(): void {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12,
    };

    this.initForm();
    this.initOverlays();
  }

  initForm(): void {
    this.contactForm = this._fb.group({
      name: [null, [Validators.required, this.noWhitespaceValidator]],
      email: [
        null,
        [Validators.required, Validators.email, this.noWhitespaceValidator],
      ],
      companyName: [null],
      subject: [null, this.noWhitespaceValidator],
      message: [null, [Validators.required, this.noWhitespaceValidator]],
      file: [null],
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  initOverlays(): void {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({
          position: { lat: 36.879466, lng: 30.667648 },
          title: 'Konyaalti',
        }),
        new google.maps.Marker({
          position: { lat: 36.883707, lng: 30.689216 },
          title: 'Ataturk Park',
        }),
        new google.maps.Marker({
          position: { lat: 36.885233, lng: 30.702323 },
          title: 'Oldtown',
        }),
      ];
    }
  }

  onFileUpload(event) {
    if (event.target && event.target.files && event.target.files.length) {
      const file = (event.target as HTMLInputElement).files[0];
      if (file.size > 10 * 1024 * 1024) {
        this.alertNotificationService.error('الحجم الأقصى للمرفق هو 10 ميجا');
        return false;
      }

      this.contactForm.patchValue({ file });
      this.contactForm.get('file').updateValueAndValidity();
      this.filePreview = {
        name: file.name,
        size: formatBytes(file.size),
      };
    }
  }

  onSubmit({ valid, value }) {
    if (valid) {
      this.submitContact.emit(value);
      this.contactForm.reset();
      this.filePreview = null;
    }
  }
}
