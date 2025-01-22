import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Map1Component } from './map1/map1.component';
import { Map2Component } from './map2/map2.component';
import { Map3Component } from './map3/map3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    Map1Component,
    Map2Component,
    Map3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
