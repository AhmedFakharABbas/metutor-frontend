import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTutorFormComponent } from './select-tutor-form.component';

describe('SelectTutorFormComponent', () => {
  let component: SelectTutorFormComponent;
  let fixture: ComponentFixture<SelectTutorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectTutorFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
