import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { OrderlayoutComponent } from './orderlayout/orderlayout.component';

const routes: Routes = [
  {
    path: 'order-layout',
    component: OrderlayoutComponent,
    children:[{

      path:'orders',
      component:OrdersComponent
    },
    {

      path:'',
      component:OrdersComponent
    }

    ]
  }
];

@NgModule({
  declarations: [
    OrdersComponent,
    OrderlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    OrdersComponent
  ]
})
export class OrdersModule { }
