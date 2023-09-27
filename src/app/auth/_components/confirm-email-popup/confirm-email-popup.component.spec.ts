import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailPopupComponent } from './confirm-email-popup.component';

describe('ConfirmEmailPopupComponent', () => {
  let component: ConfirmEmailPopupComponent;
  let fixture: ComponentFixture<ConfirmEmailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmEmailPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
