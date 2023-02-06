import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { UserComponent } from './components/user/user.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, PhotoGalleryComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, UserComponent, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
