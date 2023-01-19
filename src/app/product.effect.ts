import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromProduct from './index';

import { ProductService } from './product.service';
import * as productAction from './product.action';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';

@Injectable()
export class ProductEffect {
  constructor(
    private productService: ProductService,
    private action$: Actions,
    private store: Store<any>
  ) {}

  @Effect()
  loadProduct$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.Load),
    withLatestFrom(this.store.pipe(select(fromProduct.getLoaded))),
    switchMap(([, loaded]) => {
      if (loaded) {
        return empty();
      }

      console.log('LOADING DATA', loaded);

      return this.productService.getProducts().pipe(
        map((products) => {
          return new productAction.LoadSuccess(products);
        }),
        catchError((err) => of(new productAction.LoadFail(err)))
      );
    })
  );
}
