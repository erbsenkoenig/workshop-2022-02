import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-basket',
  templateUrl: './flight-basket.component.html',
  styleUrls: ['./flight-basket.component.css'],
})
export class FlightBasketComponent implements OnInit {
  @Input() basket: { [key: number]: boolean };

  constructor() {}

  ngOnInit(): void {}
}
