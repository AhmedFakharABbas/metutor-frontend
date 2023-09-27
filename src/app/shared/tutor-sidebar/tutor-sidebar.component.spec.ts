import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSidebarComponent } from './tutor-sidebar.component';

describe('TutorSidebarComponent', () => {
  let component: TutorSidebarComponent;
  let fixture: ComponentFixture<TutorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
