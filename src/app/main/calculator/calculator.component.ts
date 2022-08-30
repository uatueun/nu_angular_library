import { Component, OnInit } from '@angular/core';
import { FxRatesComponent } from './fx-rates/fx-rates.component';
import { NormalCalculatorComponent } from './normal-calculator/normal-calculator.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  calculatorMenu = [
    {
      calculatorId: 1,
      title: 'Normal',
      component: NormalCalculatorComponent,
    },
    {
      calculatorId: 2,
      title: 'FX Rates',
      component: FxRatesComponent,
    },
  ];

  currentCalculatorId: number = 1;
  constructor() {}

  ngOnInit(): void {}

  activeChecker(id:number){
    this.currentCalculatorId = id
  }
}
