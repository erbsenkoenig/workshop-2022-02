import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>(null);

export const BASE_URL_WITH_NEW_SCOPING = new InjectionToken<string>(null, {
  providedIn: 'root',
  factory: () => 'http://www.angular.at/api',
});
