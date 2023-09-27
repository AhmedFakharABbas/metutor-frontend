import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTicketComponent } from './faq-ticket.component';

describe('FaqTicketComponent', () => {
  let component: FaqTicketComponent;
  let fixture: ComponentFixture<FaqTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqTicketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
