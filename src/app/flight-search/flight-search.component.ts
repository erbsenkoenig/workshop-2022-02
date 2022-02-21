import { Component, OnInit } from '@angular/core';
import { Flight } from '../types';
import { HttpClient } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from: string;
  to: string;

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;

  constructor(private flightService: FlightService) {}

  search() {
    this.flightService.searchFlights(this.from, this.to).subscribe((result: Flight[]) => {
      this.flights = result;
    });
  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }
}
