import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomAttendancesPopupComponent } from './classroom-attendances-popup.component';

describe('ClassroomAttendancesPopupComponent', () => {
  let component: ClassroomAttendancesPopupComponent;
  let fixture: ComponentFixture<ClassroomAttendancesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomAttendancesPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomAttendancesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
