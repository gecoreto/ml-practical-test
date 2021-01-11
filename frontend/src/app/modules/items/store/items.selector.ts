import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemsFeatureName, ItemsState } from './items.state';

const itemssState = createFeatureSelector<ItemsState>(itemsFeatureName);

export const itemsSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.items
);

export const productSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.product
);

export const categoriesSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.categories
);

export const workingSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.working
);
