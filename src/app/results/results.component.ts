import { CalculateTheInvestments } from './../calculateResults.service';
import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { userInputs, YearInfo } from './userInputs';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  
  
  constructor(private investmentService: CalculateTheInvestments){}

  get results(){
    return this.investmentService.theResults;
  }
}
