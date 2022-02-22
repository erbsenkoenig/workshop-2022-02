import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';

const routes: Routes = [
  {
    path: '',
    component: FlightSearchComponent,
    pathMatch: 'full',
  },
];

export const FlightBookingRoutingModule = RouterModule.forChild(routes);
