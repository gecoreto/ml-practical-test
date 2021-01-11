import { createAction, props } from '@ngrx/store';
import { ItemsI } from '../entities/items.entity';

export const fetchSearchProducts = createAction(
  '[Global/UI] fetch search products',
  props<{ query: string }>()
);

export const fetchSearchProductsSuccess = createAction(
  '[Global/UI] fetch search products success',
  props<{ items: ItemsI[]; categories: string[] }>()
);

export const fetchSearchProductsError = createAction(
  '[Global/UI] fetch search products error',
  props<{ msg: string }>()
);

export const fetchProductDetail = createAction(
  '[Global/UI] fetch product detail',
  props<{ id: string }>()
);

export const fetchProductDetailSuccess = createAction(
  '[Global/UI] fetch product detail success',
  props<{ product: ItemsI }>()
);

export const fetchProductDetailError = createAction(
  '[Global/UI] fetch product detail error',
  props<{ msg: string }>()
);
