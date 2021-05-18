import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../modules/items/store/itemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
