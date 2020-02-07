import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InventoryService } from '../../service/inventory.service'

import { Item } from '../item/item.component'

interface bookingData{
  startDate: string, 
  endDate: string, 
  booker: string
}

@Component({
  selector: 'app-item-booking',
  templateUrl: './item-booking.component.html',
  styleUrls: ['./item-booking.component.scss']
})
export class ItemBookingComponent implements OnInit {
  itemId:number;
  inventory:Array<Item>;
  bookingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      this.inventory = this.inventoryService.getInventory();
      this.itemId = parseInt(params.get('itemId'));
    });
  }

  onSubmit(bookingData:bookingData) {
    // Process checkout data here
    this.inventoryService.bookItem(
      this.itemId,
      bookingData.booker,
      new Date(bookingData.startDate),
      new Date(bookingData.endDate)
    )
  }

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      startDate: (new Date()).toISOString().slice(0,10),
      endDate: (new Date()).toISOString().slice(0,10),
      booker: ""
    });
  }

  ngOnChange() {
    console.log(this.bookingForm)
  }

}
