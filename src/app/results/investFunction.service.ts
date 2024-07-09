import { Injectable } from "@angular/core";
import { userInputs } from "./userInputs";

// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it
@Injectable({providedIn: 'root'})
export class investFunction{
    

    calculateResults(value: userInputs) {
        const annualData = [];
        let investmentValue = value.initialInvestment;
    
        for (let i = 0; i < value.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (value.expectedReturn / 100);
        investmentValue += interestEarnedInYear + value.annualInvestment;
        const totalInterest =
            investmentValue - value.annualInvestment * year - value.initialInvestment;
        annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: value.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: value.initialInvestment + value.annualInvestment * year,
        });
        }
    
        return annualData;
  }
}