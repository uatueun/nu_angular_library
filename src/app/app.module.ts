import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SwiperComponent } from './main/swiper/swiper.component';
import { TabsComponent } from './main/tabs/tabs.component';
import { PresetComponent } from './main/preset/preset.component';
import { Swiper1Component } from './main/swiper/swiper1/swiper1.component';
import { CalculatorComponent } from './main/calculator/calculator.component';
import { FxRatesComponent } from './main/calculator/fx-rates/fx-rates.component';
import { SwiperModule } from 'swiper/angular';
import { MenuWorkComponent } from './main/menu-work/menu-work.component';
import { Menu1Component } from './main/menu-work/menu1/menu1.component';
import { GridComponent } from './main/grid/grid.component';
import { NormalCalculatorComponent } from './main/calculator/normal-calculator/normal-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SwiperComponent,
    TabsComponent,
    PresetComponent,
    Swiper1Component,
    CalculatorComponent,
    FxRatesComponent,
    MenuWorkComponent,
    Menu1Component,
    GridComponent,
    NormalCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
