import { Directive, ElementRef } from '@angular/core';

import {
  buttonDirectives, buttonNoOutlinedSelector, buttonOutlinedSelector, buttonPrimarySelector,
  buttonSelector
} from './model';

@Directive({
  selector: `button[${buttonSelector}],
  button[${buttonPrimarySelector},
  button[${buttonOutlinedSelector},
  button[${buttonNoOutlinedSelector}],
  a[${buttonPrimarySelector}],
  a[${buttonOutlinedSelector}],
  a[${buttonNoOutlinedSelector}]`,
  standalone: true,
})
export class ButtonDirective {
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    buttonDirectives.forEach((directive) => {
      if (this.elementRef.nativeElement.hasAttribute(directive)) {
        this.elementRef.nativeElement.classList.add(directive);
      }
    });
  }
}
