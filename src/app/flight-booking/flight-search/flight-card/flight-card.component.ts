import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../../../types';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent implements OnInit {
  @Input() flight: Flight;
  @Input() selected: boolean;

  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  select(value: boolean) {
    this.selectedChange.emit(value);
  }
}
