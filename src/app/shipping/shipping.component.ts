import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  // standalone: true,
  // imports: [],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})

export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  
  constructor(private cartService: CartService) { }  // Inject CartService here


  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}