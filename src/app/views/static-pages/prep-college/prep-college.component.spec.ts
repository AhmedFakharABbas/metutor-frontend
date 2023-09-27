import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepCollegeComponent } from './prep-college.component';

describe('PrepCollegeComponent', () => {
  let component: PrepCollegeComponent;
  let fixture: ComponentFixture<PrepCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepCollegeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
