import { Product } from "./product";
import { ProductActions, ProductActionTypes } from "./product.action";

export interface ProductState {
  toggleCheckBox: boolean,
  products: Product[],
  loaded: boolean;
  error: string
}

const initialState: ProductState = {
  toggleCheckBox: true,
  products: [],
  loaded: false,
  error: ''
};


export function ProductReducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {
case ProductActionTypes.LoadSuccess:
  return {
    ...state,
    products: [...action.payload],
    loaded: true,
    error: ''
  }
    default:
      return state
  }
}


