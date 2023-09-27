import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TicketStatus, TicketUserType } from 'src/app/config';
import { Ticket, TicketReply } from 'src/app/models';
import { AlertNotificationService } from 'src/app/shared';
import { SupportService } from 'src/app/_api';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgxAutoScroll } from 'ngx-auto-scroll';

@Component({
  selector: 'metutors-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
  animations: [
    trigger('dropMenuAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  ticket: Ticket;
  ticketStatus = TicketStatus;
  ticketUserType = TicketUserType;
  getTicketSub: Subscription;
  messageForm: FormGroup;
  loading = false;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private supportService: SupportService,
    private _fb: FormBuilder,
    public authService: AuthService,
    private alertNotificationService: AlertNotificationService
  ) {
    this.title.setTitle('Ticket details');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      const id = +res.get('id');
      this.getTicketSub = this.supportService
        .getTicketDetailsById(id)
        .subscribe((response) => {
          this.ticket = response;
          this.title.setTitle(this.ticket?.title);
          this.forceScrollDown();
        });
    });

    this.messageForm = this._fb.group({
      reply: [null, Validators.required],
    });
  }

  onSubmit({ valid, value }): void {
    if (valid) {
      this.loading = true;
      const message = {
        ...value,
        ticket: this.ticket?.id,
      };
      this.supportService.submitMessage(message).subscribe(
        (response) => {
          this.loading = false;
          this.messageForm.reset();
          this.ticket?.replies.push(new TicketReply(false, response));
        },
        (error) => {
          this.loading = false;
          this.alertNotificationService.error(
            error.error.detail || 'Error in sending message'
          );
        }
      );
    }
  }

  forceScrollDown(): void {
    this.ngxAutoScroll.forceScrollDown();
  }

  ngOnDestroy(): void {
    if (this.getTicketSub) this.getTicketSub.unsubscribe();
  }
}
