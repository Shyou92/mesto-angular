import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[buttonType]',
  standalone: true,
})
export class SignDirective {
  @Input() buttonType = '';
  @HostBinding('class.sign') get getClassTypeSign() {
    return this.buttonType === 'sign';
  }
}
