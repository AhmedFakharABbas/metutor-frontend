import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models';

@Component({
  selector: 'metutors-profile-specialization',
  templateUrl: './profile-specialization.component.html',
  styleUrls: ['./profile-specialization.component.scss'],
})
export class ProfileSpecializationComponent implements OnInit {
  @Input() tutor: Tutor;

  constructor() {}

  ngOnInit(): void {}
}
