import { Directive, ElementRef } from '@angular/core';

import {
  buttonDirectives, buttonNoOutlinedSelector, buttonOutlinedSelector, buttonPrimarySelector
} from './model';

@Directive({
  selector: `button[${buttonPrimarySelector}, button[${buttonOutlinedSelector}, button[${buttonNoOutlinedSelector}], a[${buttonPrimarySelector}], a[${buttonOutlinedSelector}], a[${buttonNoOutlinedSelector}]]`,
  standalone: true,
})
export class ButtonDirective {
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    buttonDirectives.forEach((directive) => {
      console.log(buttonDirectives);

      if (this.elementRef.nativeElement.hasAttribute(directive)) {
        console.log('it has');
        this.elementRef.nativeElement.classList.add(directive);
      }
    });
  }
}
