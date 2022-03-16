import { Component, OnDestroy } from '@angular/core';
import { Flight } from '../../types';
import { FlightService } from './flight.service';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnDestroy {
  flights: Flight[] = [];
  basket: { [key: number]: boolean } = {};

  flights$: Observable<Flight[]>;

  form: FormGroup;

  private subs: Subscription[] = [];

  constructor(private flightService: FlightService, private fb: FormBuilder) {
    this.form = fb.group({
      from: [null, Validators.required],
      to: [null, [Validators.required, Validators.minLength(3)]],
    });

    // TYPEAHEAD EXAMPLE
    this.form
      .get('from')
      .valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((fromValue: string) => console.log(fromValue));

    this.form.valueChanges.subscribe((formValue) => {
      console.log('FORM VALUE CHANGED', formValue);
    });
  }

  search() {
    this.flights$ = this.flightService.searchFlights(this.form.value.from, this.form.value.to);

    this.subs.push(
      this.flightService.searchFlights(this.form.value.from, this.form.value.to).subscribe((result: Flight[]) => {
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
