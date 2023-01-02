import { ButtonDirective } from 'src/app/directives/button/button.directive';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  value = 'Войти';
  sign = 'sign';
}
