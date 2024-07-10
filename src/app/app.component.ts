import { userInputs, YearInfo } from './results/userInputs';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InvestFormComponent } from './invest-form/invest-form.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InvestFormComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  theResults ?: YearInfo[];
  calculateInvestmentResults(data: userInputs) {
    const annualData = [];
    let investmentValue = data.initialInvestment;
  
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }
  
    this.theResults = [...annualData];
    console.log(this.theResults);
  }


}
