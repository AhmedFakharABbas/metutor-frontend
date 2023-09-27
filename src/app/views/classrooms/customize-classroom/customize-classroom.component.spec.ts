import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeClassroomComponent } from './customize-classroom.component';

describe('CustomizeClassroomComponent', () => {
  let component: CustomizeClassroomComponent;
  let fixture: ComponentFixture<CustomizeClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizeClassroomComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
