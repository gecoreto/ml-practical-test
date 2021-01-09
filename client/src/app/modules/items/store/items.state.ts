import { ItemsI } from '../entities/items.entity';

export const itemsFeatureName = 'itemsModuleState';

export type ItemsState = Readonly<{
  items: ItemsI[];
  working: boolean;
}>;

export const initialItemsState: ItemsState = {
  items: [],
  working: false
};
