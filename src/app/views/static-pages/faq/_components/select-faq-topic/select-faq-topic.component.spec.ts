import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFaqTopicComponent } from './select-faq-topic.component';

describe('SelectFaqTopicComponent', () => {
  let component: SelectFaqTopicComponent;
  let fixture: ComponentFixture<SelectFaqTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFaqTopicComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFaqTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
