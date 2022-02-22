import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';

@NgModule({
  declarations: [CityPipe],
  imports: [CommonModule],
  exports: [CityPipe, CommonModule],
})
export class SharedModule {}
