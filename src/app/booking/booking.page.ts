import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss']
})
export class BookingPage implements OnInit {
  user;
  bookingList: any = [];

  constructor(private authService: AuthService, private bookingService: BookingService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.bookingService.getReservations(this.user.uuid).pipe(map(response => {
      this.bookingList = response.body;
    }));
  }
}
