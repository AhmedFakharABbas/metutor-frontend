import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpLayoutComponent } from './help-layout.component';

describe('HelpLayoutComponent', () => {
  let component: HelpLayoutComponent;
  let fixture: ComponentFixture<HelpLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
