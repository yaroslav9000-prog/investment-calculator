import { CalculateTheInvestments } from './../calculateResults.service';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { userInputs } from '../results/userInputs';


@Component({
  selector: 'app-invest-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invest-form.component.html',
  styleUrl: './invest-form.component.css'
})
export class InvestFormComponent {
  @Output() calculate = new EventEmitter<userInputs>();
  // Tried to instancetiate EventEmitter with 'submit' somehow it didnt work.

  initialInvestment = '0';
  annualInvestment = '0' ;
  expectedReturn = '5';
  duration = '10';

  constructor(private investmentService: CalculateTheInvestments){}

  // NgModel two way binding doesnt work if my input components dont have name attribute.

  onSubmit(){
    this.investmentService.calculateInvestmentResults({initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration : +this.duration})
    console.log("event emitted")
    // console.log(this.annualInvestment, this.duration, this.expectedReturn, this.initialInvestment);
  }
}
