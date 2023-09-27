import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomPlaceholderComponent } from './classroom-placeholder.component';

describe('ClassroomPlaceholderComponent', () => {
  let component: ClassroomPlaceholderComponent;
  let fixture: ComponentFixture<ClassroomPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomPlaceholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
