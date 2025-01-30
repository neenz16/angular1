import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component'; // Import this
import { ProductDetailsComponent } from './product-details/product-details.component'; // manual
import { CartComponent } from './cart/cart.component'; // manual
import { HttpClientModule } from '@angular/common/http'; // manual
import { ShippingComponent } from './shipping/shipping.component'; // manual
// import { CartService } from './cart.service';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent, // manual
    ProductDetailsComponent,// manual
    CartComponent,// manual
    ShippingComponent,// manual
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
