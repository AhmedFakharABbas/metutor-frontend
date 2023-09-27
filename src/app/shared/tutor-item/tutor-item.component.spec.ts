import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorItemComponent } from './tutor-item.component';

describe('TutorItemComponent', () => {
  let component: TutorItemComponent;
  let fixture: ComponentFixture<TutorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
