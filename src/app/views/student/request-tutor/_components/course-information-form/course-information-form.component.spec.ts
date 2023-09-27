import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInformationFormComponent } from './course-information-form.component';

describe('CourseInformationFormComponent', () => {
  let component: CourseInformationFormComponent;
  let fixture: ComponentFixture<CourseInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseInformationFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
