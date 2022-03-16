import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightBasketComponent } from './flight-search/flight-basket/flight-basket.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FromInputComponent } from './flight-search/from-input/from-input.component';

@NgModule({
  declarations: [FlightSearchComponent, FlightCardComponent, FlightBasketComponent, FromInputComponent],
  imports: [SharedModule, ReactiveFormsModule, FlightBookingRoutingModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
