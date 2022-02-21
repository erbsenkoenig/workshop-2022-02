import { Component, OnInit } from '@angular/core';
import { Flight } from './types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
  from: string;
  to: string;

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;

  constructor(private httpClient: HttpClient) {}

  search() {
    const url = 'http://www.angular.at/api/flight';

    const params = {
      from: this.from,
      to: this.to,
    };

    const headers = { Accept: 'application/json' };

    this.httpClient.get<Flight[]>(url, { params, headers }).subscribe((result: Flight[]) => {
      this.flights = result;
    });
  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }
}
