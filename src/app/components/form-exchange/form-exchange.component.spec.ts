import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExchangeComponent } from './form-exchange.component';

describe('FormExchangeComponent', () => {
  let component: FormExchangeComponent;
  let fixture: ComponentFixture<FormExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormExchangeComponent]
    });
    fixture = TestBed.createComponent(FormExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
