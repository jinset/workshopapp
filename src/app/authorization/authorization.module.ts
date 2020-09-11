import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizationPageRoutingModule } from './authorization-routing.module';

import { AuthorizationPage } from './authorization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizationPageRoutingModule
  ],
  declarations: [AuthorizationPage]
})
export class AuthorizationPageModule {}
