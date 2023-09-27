import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSpecializationComponent } from './profile-specialization.component';

describe('ProfileSpecializationComponent', () => {
  let component: ProfileSpecializationComponent;
  let fixture: ComponentFixture<ProfileSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileSpecializationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
