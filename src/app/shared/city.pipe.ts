import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
})
export class CityPipe implements PipeTransform {
  transform(city: string, format: 'short' | 'long' = 'short'): string {
    if (city === 'Berlin' && format === 'short') {
      return 'BER';
    }

    if (city === 'Berlin' && format === 'long') {
      return 'Flughafen Berlin Brandenburg „Willy Brandt“';
    }

    if (city === 'München' && format === 'short') {
      return 'MUC';
    }

    if (city === 'Hamburg' && format === 'short') {
      return 'HAM';
    }

    return city;
  }
}
