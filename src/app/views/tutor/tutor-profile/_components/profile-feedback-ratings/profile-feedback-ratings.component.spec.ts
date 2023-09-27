import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFeedbackRatingsComponent } from './profile-feedback-ratings.component';

describe('ProfileFeedbackRatingsComponent', () => {
  let component: ProfileFeedbackRatingsComponent;
  let fixture: ComponentFixture<ProfileFeedbackRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileFeedbackRatingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFeedbackRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
