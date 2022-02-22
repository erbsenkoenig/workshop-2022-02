import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BASE_URL } from './flight-booking/flight-search/constants';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightBookingModule, SharedModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'http://www.angular.at/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
