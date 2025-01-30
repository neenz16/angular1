import { Component } from '@angular/core';

import { products } from '../products';
// import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'; // ✅ Import standalone component


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // standalone: true, // ✅ Ensure this component is also standalone
  // imports: [ProductAlertsComponent], //Import standalone components explicitly
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/