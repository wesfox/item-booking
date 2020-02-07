import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryService } from './service/inventory.service'

import { InventoryComponent } from './component/inventory/inventory.component'
import { ItemBookingComponent } from './component/item-booking/item-booking.component'

const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'inventory/:itemId', component: ItemBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [InventoryService]
})
export class AppRoutingModule { }
