import { Component, OnInit } from '@angular/core';

import { Mock, mock } from '../../../assets/photos';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  protected list: Mock[] = mock;

  ngOnInit() {
    console.log(this.list);
  }
}
