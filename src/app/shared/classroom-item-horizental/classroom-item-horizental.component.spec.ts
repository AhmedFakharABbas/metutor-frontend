import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomItemHorizentalComponent } from './classroom-item-horizental.component';

describe('ClassroomItemHorizentalComponent', () => {
  let component: ClassroomItemHorizentalComponent;
  let fixture: ComponentFixture<ClassroomItemHorizentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomItemHorizentalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomItemHorizentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
