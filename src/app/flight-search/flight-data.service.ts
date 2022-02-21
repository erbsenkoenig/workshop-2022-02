import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Flight } from '../types';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root',
})
export class FlightDataService {
  private _flights$: BehaviorSubject<Flight[]> = new BehaviorSubject([]);

  constructor(private flightApiService: FlightService) {}

  search(from, to) {
    this.flightApiService.searchFlights(from, to).subscribe((val) => this._flights$.next(val));
  }

  filterByCity(city) {
    this._flights$.next(this._flights$.value.filter((flight) => flight.from === city || flight.to === city));
  }

  get flights$(): Observable<Flight[]> {
    return this._flights$.asObservable();
  }
}
