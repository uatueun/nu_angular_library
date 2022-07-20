import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SwiperComponent } from './main/swiper/swiper.component';
import { TabsComponent } from './main/tabs/tabs.component';
import { PresetComponent } from './main/preset/preset.component';
import { Swiper1Component } from './main/swiper/swiper1/swiper1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SwiperComponent,
    TabsComponent,
    PresetComponent,
    Swiper1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
