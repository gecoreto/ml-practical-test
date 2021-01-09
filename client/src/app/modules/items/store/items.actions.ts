import { createAction, props } from '@ngrx/store';
import { ItemsI } from '../entities/items.entity';

export const fetchSearchProducts = createAction(
  '[Global/UI] fetch search products',
  props<{ query: string }>()
);

export const fetchSearchProductsSuccess = createAction(
  '[Global/UI] fetch search products success',
  props<{ items: ItemsI[] }>()
);

export const fetchSearchProductsError = createAction(
  '[Global/UI] fetch search products error',
  props<{ msg: string }>()
);
