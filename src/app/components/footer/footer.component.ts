import { ButtonDirective } from 'src/app/directives/button/button.directive';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class footerComponent {}
