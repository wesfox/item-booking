import { Injectable } from '@angular/core';

import { items as localItemList } from '../data/items';
import { Item } from '../component/item/item.component'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Array<Item> = [];

  fetchInventory() {
    this.inventory = localItemList;
  }

  getInventory(){
    return this.inventory;
  }

  bookItem(itemId:number, booker: string, startDate:Date, endDate:Date){
    let begin = startDate.getTime();
    let end = endDate.getTime();
    for (let d = begin; d <= end; d = d + 3600*24*1000) {
      let isoDate = (new Date(d)).toISOString().slice(0, 10);
      this.inventory[itemId].booked[isoDate] = booker;
    }
    this.inventory[itemId].booked = {...this.inventory[itemId].booked}
  }

  constructor() { 
    this.fetchInventory();
  }
}
