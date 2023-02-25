import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
