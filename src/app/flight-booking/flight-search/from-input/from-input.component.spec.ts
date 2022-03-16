import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromInputComponent } from './from-input.component';

describe('FromInputComponent', () => {
  let component: FromInputComponent;
  let fixture: ComponentFixture<FromInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
