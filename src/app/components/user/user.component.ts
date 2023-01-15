import { ButtonDirective } from 'src/app/directives/button/button.directive';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ButtonDirective, UserInfoComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {}
