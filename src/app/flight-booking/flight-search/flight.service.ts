import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../types';
import { BASE_URL, BASE_URL_WITH_NEW_SCOPING } from './constants';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(BASE_URL_WITH_NEW_SCOPING) private baseUrl2: string
  ) {
    console.log('FLIGHT SERVICE');
  }

  searchFlights(from, to) {
    const url = `${this.baseUrl}/flight`;

    const params = {
      from,
      to,
    };

    const headers = { Accept: 'application/json' };

    return this.httpClient.get<Flight[]>(url, { params, headers });
  }
}
