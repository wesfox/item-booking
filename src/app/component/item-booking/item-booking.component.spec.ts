import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBookingComponent } from './item-booking.component';

describe('ItemBookingComponent', () => {
  let component: ItemBookingComponent;
  let fixture: ComponentFixture<ItemBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
