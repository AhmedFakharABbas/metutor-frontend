import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertNotificationService } from 'src/app/shared';
import { addLookups, formatBytes, getLookups } from 'src/app/utils';
import { LookupsService, SupportService } from 'src/app/_api';

@Component({
  selector: 'metutors-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
})
export class SupportTicketComponent implements OnInit, OnDestroy {
  supportForm: FormGroup;
  loading = false;
  getTicketTypesSub: Subscription;
  ticketsList: any[] = [];
  filePreview: any;

  constructor(
    private _fb: FormBuilder,
    private LookupsService: LookupsService,
    private title: Title,
    private alertNotificationService: AlertNotificationService,
    private supportService: SupportService,
    private router: Router
  ) {
    this.title.setTitle('Create new ticket');
  }

  ngOnInit(): void {
    this.supportForm = this._fb.group({
      type: [null, Validators.required],
      title: [null, [Validators.required, this.noWhitespaceValidator]],
      description: [null, [Validators.required, this.noWhitespaceValidator]],
      file: [null],
    });

    this.getTicketTypesSub = this.LookupsService.fetchTicketTypes().subscribe(
      (fetchedValues) => {
        this.ticketsList = fetchedValues.results;
        addLookups('ticketTypes', this.ticketsList);
      },
      () => {}
    );
    this.ticketsList = getLookups().ticketTypes;
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onFileUpload(event) {
    if (event.target && event.target.files && event.target.files.length) {
      const file = (event.target as HTMLInputElement).files[0];
      if (file.size > 10 * 1024 * 1024) {
        this.alertNotificationService.error('Allowed file size is 10MB');
        return false;
      }

      this.supportForm.patchValue({ file });
      this.supportForm.get('file').updateValueAndValidity();
      this.filePreview = {
        name: file.name,
        size: formatBytes(file.size),
      };
    }
  }

  onSubmit(supportForm: FormGroup) {
    if (supportForm.valid) {
      this.loading = true;
      this.supportService.createTicket(supportForm.value).subscribe(
        (response) => {
          this.loading = false;
          this.alertNotificationService.success(
            'Your ticket has been sent successfully'
          );
          this.supportForm.reset();
          this.filePreview = null;
          this.router.navigate(['/student/help/support-ticket']);
        },
        (error) => {
          this.loading = false;
          this.alertNotificationService.error(
            error.error.message || 'Error in sending your ticket'
          );
        }
      );
    }
  }

  ngOnDestroy(): void {}
}
