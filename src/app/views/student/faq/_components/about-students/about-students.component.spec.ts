import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStudentsComponent } from './about-students.component';

describe('AboutStudentsComponent', () => {
  let component: AboutStudentsComponent;
  let fixture: ComponentFixture<AboutStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
