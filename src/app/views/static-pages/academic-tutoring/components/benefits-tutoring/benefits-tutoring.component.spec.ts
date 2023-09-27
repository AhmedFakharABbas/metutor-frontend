import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsTutoringComponent } from './benefits-tutoring.component';

describe('BenefitsTutoringComponent', () => {
  let component: BenefitsTutoringComponent;
  let fixture: ComponentFixture<BenefitsTutoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitsTutoringComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
