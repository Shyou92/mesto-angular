import { ButtonDirective } from 'src/app/directives/button/button.directive';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {}
