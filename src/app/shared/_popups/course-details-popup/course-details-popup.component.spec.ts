import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsPopupComponent } from './course-details-popup.component';

describe('CourseDetailsPopupComponent', () => {
  let component: CourseDetailsPopupComponent;
  let fixture: ComponentFixture<CourseDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
