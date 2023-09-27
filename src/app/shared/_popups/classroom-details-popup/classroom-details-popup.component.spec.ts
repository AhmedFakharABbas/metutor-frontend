import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDetailsPopupComponent } from './classroom-details-popup.component';

describe('ClassroomDetailsPopupComponent', () => {
  let component: ClassroomDetailsPopupComponent;
  let fixture: ComponentFixture<ClassroomDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomDetailsPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
