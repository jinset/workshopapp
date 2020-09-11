import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SliderItemComponent } from './slider-item/slider-item.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SliderItemComponent
  ],
  imports: [CommonModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SliderItemComponent,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule {}
