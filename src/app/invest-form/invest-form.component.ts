import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-invest-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invest-form.component.html',
  styleUrl: './invest-form.component.css'
})
export class InvestFormComponent {
  @Output() submit = new EventEmitter();
  

  initialInvestment: string ='';
  annualInvestment: string ='';
  expectedReturn: string ='';
  duration : number = 0;

  // NgModel two way binding doesnt work if my input components dont have name attribute.

  onSubmit(){
    this.submit.emit({
      initialInvestment: parseInt(this.initialInvestment),
      annualInvestment: parseInt(this.annualInvestment),
      expectedReturn: parseInt(this.expectedReturn),
      duration: this.duration
    });
  }
}
