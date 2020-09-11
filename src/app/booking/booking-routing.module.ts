import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';
import { AddBookingComponent } from './add-booking/add-booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPage
  },
  {
    path: 'add',
    component: AddBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
