import { Component, OnDestroy } from '@angular/core';
import { Flight } from '../../types';
import { FlightService } from './flight.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnDestroy {
  from: string;
  to: string;

  flights: Flight[] = [];
  basket: { [key: number]: boolean } = {};

  flights$: Observable<Flight[]>;

  private subs: Subscription[] = [];

  constructor(private flightService: FlightService) {}

  search() {
    this.flights$ = this.flightService.searchFlights(this.from, this.to);

    this.subs.push(
      this.flightService.searchFlights(this.from, this.to).subscribe((result: Flight[]) => {
        this.flights = result;
      })
    );
  }

  onSelectedChange(flightId: number, value: boolean) {
    this.basket[flightId] = value;
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
