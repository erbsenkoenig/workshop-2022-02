import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';

@NgModule({
  declarations: [FlightSearchComponent, FlightCardComponent],
  imports: [SharedModule, FormsModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
