import * as actions from './items.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialItemsState, ItemsState } from './items.state';

const featureReducer = createReducer(
  initialItemsState,
  on(actions.fetchSearchProducts, (state: ItemsState) => ({
    ...state,
    items: [],
    categories: [],
    working: true,
    msg: '',
  })),
  on(
    actions.fetchSearchProductsSuccess,
    (state: ItemsState, { items, categories }) => ({
      ...state,
      product: null,
      working: false,
      items,
      categories,
    })
  ),
  on(actions.fetchProductDetail, (state: ItemsState) => ({
    ...state,
    working: true,
    msg: '',
  })),
  on(actions.fetchProductDetailSuccess, (state: ItemsState, { product }) => ({
    ...state,
    working: false,
    product,
  })),
  on(
    actions.fetchProductDetailError,
    actions.fetchSearchProductsError,
    (state: ItemsState, { msg }) => ({
      ...state,
      working: false,
      msg,
    })
  ),
  on(actions.itemsClearStore, (state: ItemsState) => ({
    ...initialItemsState,
  }))
);

export const itemsReducer = (state: ItemsState, action: Action): ItemsState => {
  return featureReducer(state, action);
};
