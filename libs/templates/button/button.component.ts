import { Component, HostBinding, Input } from '@angular/core';

import { buttonSelector } from './model';

@Component({
  selector: buttonSelector,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonSize = ''

  @HostBinding('class.large') get getClassSizeLarge() {
    return this.buttonSize === 'large';
  }

  @HostBinding('class.small') get getClassSizeSmall() {
    return this.buttonSize === 'small';
  }

}
