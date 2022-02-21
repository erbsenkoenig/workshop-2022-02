import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root',
  useExisting: FlightService,
})
export class FlightExtendedService extends FlightService {
  getOtherMethod() {
    console.log('WORKING');
  }
}
