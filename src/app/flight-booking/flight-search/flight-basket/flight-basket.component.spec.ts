import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBasketComponent } from './flight-basket.component';

describe('FlightBasketComponent', () => {
  let component: FlightBasketComponent;
  let fixture: ComponentFixture<FlightBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
