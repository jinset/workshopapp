import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {
  @Input() nameArea?: string;
  @Input() nameAuthorization?: string;
  @Input() reasonAuthorization?: string;
  @Input() dateAction?: string;
  @Input() time?: string;
  @Input() identification?: string;
  @Input() status: string;

  constructor() {
  }

  ngOnInit(): void {}

}
