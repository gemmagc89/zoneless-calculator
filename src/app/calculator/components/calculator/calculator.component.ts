import { Component } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  /*styles: `
    @reference "tailwindcss";
    .is-command {
      @apply bg-indigo-700/20;
    }
  `*/
})
export class CalculatorComponent {

}
