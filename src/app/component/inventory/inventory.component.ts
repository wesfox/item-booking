import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../../service/inventory.service'

import { Item } from '../../component/item/item.component'

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
    items:Array<Item>
    
    constructor(private inventoryService: InventoryService) { 
        this.inventoryService = inventoryService
        this.items = inventoryService.getInventory()
    }

    ngOnInit() { }
}