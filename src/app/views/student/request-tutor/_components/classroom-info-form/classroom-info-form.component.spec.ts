import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomInfoFormComponent } from './classroom-info-form.component';

describe('ClassroomInfoFormComponent', () => {
  let component: ClassroomInfoFormComponent;
  let fixture: ComponentFixture<ClassroomInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomInfoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
