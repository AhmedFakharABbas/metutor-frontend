import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { addLookups, getLookups } from 'src/app/utils';
import { LookupsService } from 'src/app/_api';

@Component({
  selector: 'metutors-learning-environment',
  templateUrl: './learning-environment.component.html',
  styleUrls: ['./learning-environment.component.scss'],
})
export class LearningEnvironmentComponent implements OnInit, OnDestroy {
  getCourseFieldSub: Subscription;
  courseFieldSubject: any[] = [];

  constructor(private lookupsService: LookupsService) {}

  ngOnInit(): void {
    this.getCourseFieldSub = this.lookupsService
      .fetchCourseFieldSubject()
      .subscribe(
        (fetchedValues) => {
          this.courseFieldSubject = fetchedValues.results;
          addLookups('courseFieldSubject', this.courseFieldSubject);
        },
        () => {}
      );
    this.courseFieldSubject = getLookups().courseFieldSubject;
  }

  ngOnDestroy(): void {
    if (this.getCourseFieldSub) this.getCourseFieldSub.unsubscribe();
  }
}
