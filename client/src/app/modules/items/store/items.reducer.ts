import * as actions from './items.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialItemsState, ItemsState } from './items.state';

const featureReducer = createReducer(
  initialItemsState,
  on(actions.fetchSearchProducts, (state: ItemsState) => ({
    ...state,
    working: true,
    msg: '',
  })),
  on(actions.fetchSearchProductsSuccess, (state: ItemsState, { items }) => ({
    ...state,
    working: false,
    items,
  })),
  on(actions.fetchSearchProductsError, (state: ItemsState, { msg }) => ({
    ...state,
    working: false,
    msg,
  }))
);

export const itemsReducer = (state: ItemsState, action: Action): ItemsState => {
  return featureReducer(state, action);
};
