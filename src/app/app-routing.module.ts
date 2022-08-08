import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from './main/swiper/swiper.component';
import { TabsComponent } from './main/tabs/tabs.component';
import { PresetComponent } from './main/preset/preset.component';
import { CalculatorComponent } from './main/calculator/calculator.component';
import { MenuWorkComponent } from './main/menu-work/menu-work.component';

const routes: Routes = [
  {
    path: '',
    component: PresetComponent,
  },
  {
    path: 'swiper',
    component: SwiperComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'menuwork',
    component: MenuWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
