import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Tutor } from 'src/app/models';
import { TutorsService } from 'src/app/_api';

@Component({
  selector: 'metutors-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss'],
})
export class TutorProfileComponent implements OnInit {
  tutor: Tutor;

  constructor(
    private tutorService: TutorsService,
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.title.setTitle('Tutor profile');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: ParamMap) => {
      const id = +res.get('id');
      this.tutorService.getTutorById(id).subscribe((response) => {
        this.tutor = response;
        this.title.setTitle(this.tutor.name);
      });
    });
  }
}
