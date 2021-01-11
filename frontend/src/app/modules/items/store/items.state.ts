import { ItemsI } from '../entities/items.entity';

export const itemsFeatureName = 'itemsModuleState';

export type ItemsState = Readonly<{
  items: ItemsI[];
  categories: string[];
  product: ItemsI,
  working: boolean;
}>;

export const initialItemsState: ItemsState = {
  items: [],
  categories: [],
  product: null,
  working: false
};
