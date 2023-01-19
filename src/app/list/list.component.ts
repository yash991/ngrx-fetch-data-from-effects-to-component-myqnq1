import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';

import { ProductService } from '../product.service';
import * as productActions from '../product.action';
import { Product } from '../product';
import * as fromApp from '../product.reducer';
import * as fromProduct from '../index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private productService: ProductService,
    private store: Store<fromApp.ProductState>,
    private router: Router
  ) {}
  ngOnInit() {
    this.store.dispatch(new productActions.Load());
    if (this.store) {
      this.products$ = this.store.pipe(select(fromProduct.getProducts));
    }
  }
}
