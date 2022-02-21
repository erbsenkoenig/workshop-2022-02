import { TestBed } from '@angular/core/testing';

import { FlightExtendedService } from './flight-extended.service';

describe('FlightExtendedService', () => {
  let service: FlightExtendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightExtendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
