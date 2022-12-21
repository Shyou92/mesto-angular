import { SignDirective } from 'src/app/directives/sign.directive';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SignDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  value = 'Войти';
  sign = 'sign';
}
