import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutMeComponent } from './profile-about-me.component';

describe('ProfileAboutMeComponent', () => {
  let component: ProfileAboutMeComponent;
  let fixture: ComponentFixture<ProfileAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAboutMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
