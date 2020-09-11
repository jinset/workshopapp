// Workaround for require issue!
declare var require: any;

import { Component, OnInit } from '@angular/core';
import { loadCldr } from '@syncfusion/ej2-base';

loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/es/ca-gregorian.json'),
  require('cldr-data/main/es/numbers.json'),
  require('cldr-data/main/es/timeZoneNames.json')
);

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  minDate: Date = new Date();
  value: Date = new Date();
  scheduleList = [{ time: '10 am', available: true}, { time: '11 am', available: true}, { time: '12 md', available: false}];
  constructor() {}

  ngOnInit(): void {}

  valueChange(dates): void {
    //isMultiSelection ?  dates.values :  dates.value
    console.log(`${dates.value} is selected`);
  }

  onChange(value){
    console.log(value['detail'].value);
  }
}
