import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AlertNotificationService } from 'src/app/shared';
import { addMisc, getMisc } from 'src/app/utils';
import { ContactService, MiscService } from 'src/app/_api';

@Component({
  selector: 'metutors-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  getSystemInfoDetailsSub: Subscription;
  systemInfoDetails: any;
  loading: boolean = false;

  constructor(
    private miscService: MiscService,
    private title: Title,
    private contactService: ContactService,
    private alertNotificationService: AlertNotificationService
  ) {
    this.title.setTitle('Contact');
  }

  ngOnInit(): void {
    this.getSystemInfoDetailsSub = this.miscService
      .fetchSystemInfoDetails()
      .subscribe(
        (fetchedValues) => {
          this.systemInfoDetails = fetchedValues;
          addMisc('systemInfoDetails', this.systemInfoDetails);
        },
        () => {}
      );
    this.systemInfoDetails = getMisc().systemInfoDetails;
  }

  submitContact(value): void {
    this.loading = true;
    this.contactService.createContact(value).subscribe(
      (response) => {
        this.loading = false;
        this.alertNotificationService.success(
          'Your message has been sent successfully'
        );
      },
      (error) => {
        this.loading = false;
        this.alertNotificationService.error(
          error.error.message || 'Error in sending your message'
        );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.getSystemInfoDetailsSub)
      this.getSystemInfoDetailsSub.unsubscribe();
  }
}
