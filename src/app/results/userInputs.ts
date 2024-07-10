export interface userInputs {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration : number
}

export interface YearInfo{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}