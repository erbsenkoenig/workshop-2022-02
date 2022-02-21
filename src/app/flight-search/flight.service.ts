import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../types';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private httpClient: HttpClient) {
    console.log('FLIGHT SERVICE');
  }

  searchFlights(from, to) {
    const url = 'http://www.angular.at/api/flight';

    const params = {
      from,
      to,
    };

    const headers = { Accept: 'application/json' };

    return this.httpClient.get<Flight[]>(url, { params, headers });
  }
}
