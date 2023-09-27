import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertNotificationService } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'metutors-profile-share',
  templateUrl: './profile-share.component.html',
  styleUrls: ['./profile-share.component.scss'],
})
export class ProfileShareComponent implements OnInit {
  defaultUrl: string;
  clientUrl = environment.clientUrl;

  constructor(
    private router: Router,
    private alertNotificationService: AlertNotificationService
  ) {}

  ngOnInit(): void {
    this.defaultUrl = this.router.url;
  }

  cloneText(inputElement: {
    select: () => void;
    setSelectionRange: (arg0: number, arg1: number) => void;
  }) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.alertNotificationService.info('Copied to clipboard');
  }
}
