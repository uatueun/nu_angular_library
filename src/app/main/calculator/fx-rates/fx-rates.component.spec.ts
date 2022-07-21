import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRatesComponent } from './fx-rates.component';

describe('FxRatesComponent', () => {
  let component: FxRatesComponent;
  let fixture: ComponentFixture<FxRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
