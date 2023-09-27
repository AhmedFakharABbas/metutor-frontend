import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTutorBadgesComponent } from './profile-tutor-badges.component';

describe('ProfileTutorBadgesComponent', () => {
  let component: ProfileTutorBadgesComponent;
  let fixture: ComponentFixture<ProfileTutorBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTutorBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTutorBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
