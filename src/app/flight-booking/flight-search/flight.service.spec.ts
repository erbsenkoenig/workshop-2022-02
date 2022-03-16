import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FlightService } from './flight.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL, BASE_URL_WITH_NEW_SCOPING } from './constants';

describe('FlightService', () => {
  let service: FlightService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: BASE_URL,
          useValue: 'BASE_URL',
        },
        {
          provide: BASE_URL_WITH_NEW_SCOPING,
          useValue: 'SCOPING_BASE_URI',
        },
      ],
    });
    service = TestBed.inject(FlightService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search flights and return results', fakeAsync(() => {
    let result;

    service.searchFlights('FROM', 'TO').subscribe((r: any) => {
      result = r;
    });

    tick();

    const request = testingController.expectOne('BASE_URL/flight?from=FROM&to=TO');
    request.flush([{ from: 'FROM', to: 'TO' }]);

    expect(result).toEqual([{ from: 'FROM', to: 'TO', foo: 'FOO' }]);
  }));
});
