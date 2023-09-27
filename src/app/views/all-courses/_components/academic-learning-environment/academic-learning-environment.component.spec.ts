import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLearningEnvironmentComponent } from './academic-learning-environment.component';

describe('AcademicLearningEnvironmentComponent', () => {
  let component: AcademicLearningEnvironmentComponent;
  let fixture: ComponentFixture<AcademicLearningEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademicLearningEnvironmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicLearningEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
