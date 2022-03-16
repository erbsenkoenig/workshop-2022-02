import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-input',
  templateUrl: './from-input.component.html',
  styleUrls: ['./from-input.component.css'],
})
export class FromInputComponent implements OnInit {
  @Input() searchFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
