import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomLayoutComponent } from './classroom-layout.component';

describe('ClassroomLayoutComponent', () => {
  let component: ClassroomLayoutComponent;
  let fixture: ComponentFixture<ClassroomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
