import { Component, OnInit } from '@angular/core';
import { data } from '../mock/data';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  public cardList = data;
  constructor() { }

  ngOnInit(): void {

  }

}
