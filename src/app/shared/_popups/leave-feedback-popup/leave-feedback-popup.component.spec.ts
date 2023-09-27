import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFeedbackPopupComponent } from './leave-feedback-popup.component';

describe('LeaveFeedbackPopupComponent', () => {
  let component: LeaveFeedbackPopupComponent;
  let fixture: ComponentFixture<LeaveFeedbackPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveFeedbackPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFeedbackPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
