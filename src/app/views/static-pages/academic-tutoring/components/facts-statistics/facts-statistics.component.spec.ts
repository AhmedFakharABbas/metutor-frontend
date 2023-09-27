import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsStatisticsComponent } from './facts-statistics.component';

describe('FactsStatisticsComponent', () => {
  let component: FactsStatisticsComponent;
  let fixture: ComponentFixture<FactsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactsStatisticsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
