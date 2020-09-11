import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';
import { BookingPage } from './booking.page';
import { ComponentsModule } from '../components/components.module';
import { AddBookingComponent } from './add-booking/add-booking.component';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [BookingPage, AddBookingComponent]
})
export class BookingPageModule {}
