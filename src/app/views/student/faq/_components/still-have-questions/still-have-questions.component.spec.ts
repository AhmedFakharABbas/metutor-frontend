import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillHaveQuestionsComponent } from './still-have-questions.component';

describe('StillHaveQuestionsComponent', () => {
  let component: StillHaveQuestionsComponent;
  let fixture: ComponentFixture<StillHaveQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StillHaveQuestionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StillHaveQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
