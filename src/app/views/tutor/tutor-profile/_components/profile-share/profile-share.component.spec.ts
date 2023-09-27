import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShareComponent } from './profile-share.component';

describe('ProfileShareComponent', () => {
  let component: ProfileShareComponent;
  let fixture: ComponentFixture<ProfileShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileShareComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
