import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfitComponent } from './profit/profit.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [

    OrderComponent,
    CustomerComponent,
    ProfitComponent,
    AdminlayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  exports:[
    OrderComponent,
    CustomerComponent,
    ProfitComponent,
    AdminlayoutComponent
  ]
})
export class AdminModule { }
