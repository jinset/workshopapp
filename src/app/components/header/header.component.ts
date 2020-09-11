import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Input() itSave: boolean = false;
  @Output() btnSave = new EventEmitter<boolean>();
  constructor(private router: Router, private location: Location) {

  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  save(btnAction: boolean) {
    this.btnSave.emit(btnAction);
  }
}
