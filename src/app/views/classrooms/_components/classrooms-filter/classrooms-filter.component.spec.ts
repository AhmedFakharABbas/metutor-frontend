import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomsFilterComponent } from './classrooms-filter.component';

describe('ClassroomsFilterComponent', () => {
  let component: ClassroomsFilterComponent;
  let fixture: ComponentFixture<ClassroomsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
