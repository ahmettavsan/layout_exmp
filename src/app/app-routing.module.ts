import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { OrderComponent } from './admin/order/order.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { BasketComponent } from './basket/basket.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  {
    path: '', component: LayoutComponent, children: [

      { path: 'basket', component: BasketComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: ProductsComponent },




    ]
  },
  {
    path: 'admin', component:AdminlayoutComponent, children: [

      { path: 'customer', component: CustomerComponent },
      { path: 'order', component: OrderComponent },
      { path: 'profit', component: ProfitComponent },



    ]
  },

  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
