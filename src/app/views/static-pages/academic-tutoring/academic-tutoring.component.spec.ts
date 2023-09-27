import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTutoringComponent } from './academic-tutoring.component';

describe('AcademicTutoringComponent', () => {
  let component: AcademicTutoringComponent;
  let fixture: ComponentFixture<AcademicTutoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademicTutoringComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
