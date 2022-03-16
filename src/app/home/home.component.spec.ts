import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents(); // CONSTRUCTOR
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // ONINIT is called
  });

  it('should create', () => {
    fixture.detectChanges(); // ONINIT IS NOT CALLED
    expect(component).toBeTruthy();
  });

  it('should have initial count of 0', () => {
    fixture.detectChanges();

    expect(component.count).toEqual(0);

    const elem: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(elem.nativeElement.textContent).toContain('Counter: 0');
  });

  it('should decrease count on decrease button click', () => {
    component.count = 2;
    fixture.detectChanges();

    const decreaseButton: DebugElement = fixture.debugElement.query(By.css('[data-testid="btn-decrease"]'));
    decreaseButton.triggerEventHandler('click', null);

    expect(component.count).toEqual(1);

    fixture.detectChanges(); // NOT TRIGGER ON INIT JUST UPDATES VALUE REFERENCES FROM COMPONENT IN DOM

    const elem: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(elem.nativeElement.textContent).toContain('Counter: 1');
  });

  it('should increase count on increase button click', () => {
    fixture.detectChanges(); // ONINIT

    // component.increase();

    // const increaseButton = fixture.debugElement.query(By.css('button')); // GETS FIRST BUTTON

    // const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
    // const increaseButton = buttons[0];

    const increaseButton: DebugElement = fixture.debugElement.query(By.css('[data-testid="btn-increase"]'));
    increaseButton.triggerEventHandler('click', null);

    expect(component.count).toEqual(1);

    fixture.detectChanges(); // NOT TRIGGER ON INIT JUST UPDATES VALUE REFERENCES FROM COMPONENT IN DOM

    const elem: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(elem.nativeElement.textContent).toContain('Counter: 1');
  });

  it('should not decrease below 0', () => {
    fixture.detectChanges();

    expect(component.count).toEqual(0);

    const decreaseButton: DebugElement = fixture.debugElement.query(By.css('[data-testid="btn-decrease"]'));
    decreaseButton.triggerEventHandler('click', null);

    expect(component.count).toEqual(0);

    fixture.detectChanges(); // NOT TRIGGER ON INIT JUST UPDATES VALUE REFERENCES FROM COMPONENT IN DOM

    const elem: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(elem.nativeElement.textContent).toContain('Counter: 0');
  });
});
