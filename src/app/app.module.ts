import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CityPipe } from './shared/city.pipe';
import { BASE_URL } from './flight-search/constants';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent, FlightSearchComponent, CityPipe],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'http://www.angular.at/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
