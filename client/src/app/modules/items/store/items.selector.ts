import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemsFeatureName, ItemsState } from './items.state';

const itemssState = createFeatureSelector<ItemsState>(itemsFeatureName);

export const itemsSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.items
);

export const workingSelector = createSelector(
  itemssState,
  (state: ItemsState) => state.working
);
