import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InventoryComponent } from './component/inventory/inventory.component';
import { ItemComponent } from './component/item/item.component';
import { ItemBookingComponent } from './component/item-booking/item-booking.component'

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ItemComponent,
    ItemBookingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
