import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightBasketComponent } from './flight-search/flight-basket/flight-basket.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';

@NgModule({
  declarations: [FlightSearchComponent, FlightCardComponent, FlightBasketComponent],
  imports: [SharedModule, FormsModule, FlightBookingRoutingModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
