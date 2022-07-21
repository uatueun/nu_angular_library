import { Component, OnInit } from '@angular/core';

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
      component: '',
    },
    {
      calculatorId: 2,
      title: 'FX Rates',
      component: '',
    },
  ];

  currentCalculatorId: number = 1;
  constructor() {}

  ngOnInit(): void {}

  activeChecker(id:number){
    this.currentCalculatorId = id
  }
}
