import { investFunction } from './investFunction.service';
import { Component, inject, Input } from '@angular/core';
import { userInputs } from './userInputs';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() submitObject !: userInputs;

  private investFunction = inject(investFunction);

  generateResultArray(){
    return this.investFunction.calculateResults(this.submitObject);
  }
    
}
