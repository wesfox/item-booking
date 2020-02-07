import { Component, OnInit, Input } from '@angular/core';

interface Booking{
  [date:string]: string,
  
}

export interface Item{
  name:string,
  description:string,
  booked: Booking
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  booker:string;

  @Input() item:Item;
  
  constructor() { }

  ngOnInit() {
    this.booker = this.item.booked[(new Date()).toISOString().slice(0, 10)]
  }
}
