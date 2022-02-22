import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';

const routes: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
];

export const FlightBookingRoutingModule = RouterModule.forChild(routes);
