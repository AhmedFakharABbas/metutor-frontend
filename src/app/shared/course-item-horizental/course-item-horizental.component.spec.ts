import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemHorizentalComponent } from './course-item-horizental.component';

describe('CourseItemHorizentalComponent', () => {
  let component: CourseItemHorizentalComponent;
  let fixture: ComponentFixture<CourseItemHorizentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemHorizentalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemHorizentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
