import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassroomsFormComponent } from './list-classrooms-form.component';

describe('ListClassroomsFormComponent', () => {
  let component: ListClassroomsFormComponent;
  let fixture: ComponentFixture<ListClassroomsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClassroomsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassroomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
