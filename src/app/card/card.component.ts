import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;

  constructor() {}

  public isLiked: Boolean = false;

  public toggleLike() {
    this.isLiked = !this.isLiked;
  }
}
