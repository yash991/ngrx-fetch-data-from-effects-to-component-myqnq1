import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";

import {ProductService} from "./product.service";
import * as productActions from "./product.action"
import {Product} from "./product";
import * as fromApp from "./product.reducer"
import * as fromProduct from "./index"
import {Router} from "@angular/router";




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   products$: Observable<Product[]>;
  constructor(private productService: ProductService,
              private store: Store<fromApp.ProductState>,
              private router : Router
              ) {
  }
 ngOnInit() {
    
  }

  addNewScreen(){
    this.router.navigate(['new'])
  }
  goToHomeScreen(){
    this.router.navigate([''])
  }
}
