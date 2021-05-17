import itemsReducer, { fetchProductDetail, fetchSearchProducts } from './itemsSlice';

describe('items reducer', () => {
  const initialState = {
    items: [],
    categories: [],
    product: null,
    working: false,
    error: null
  };

  it('should handle initial state', () => {
    expect(itemsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers fetchList', () => {
    it('sets fetching true when fetchList is pending', () => {
      const action = { type: fetchSearchProducts.pending.type };
      const state = itemsReducer(initialState, action);
      expect(state.working).toEqual(true);
    });

    it('sets the id and list when fetchList is fulfilled', () => {
      const action = { type: fetchSearchProducts.fulfilled.type, payload: { items: [], categories: [] } };
      const state = itemsReducer(initialState, action);
      expect(state.items.length).toEqual(0);
    });

    it('sets fetching false when fetchList is rejected', () => {
      const action = { type: fetchSearchProducts.rejected.type, error: { message: 'Despapayado' } };
      const state = itemsReducer(initialState, action);
      expect(state.error).toEqual(action.error.message);
    });
  });

  describe('reducers detail', () => {
    it('sets fetching true when fetchProductDetail is pending', () => {
      const action = { type: fetchProductDetail.pending.type };
      const state = itemsReducer(initialState, action);
      expect(state.working).toEqual(true);
    });

    it('sets the id and list when fetchProductDetail is fulfilled', () => {
      const action = {
        type: fetchProductDetail.fulfilled.type,
        payload: {
          product: {
            id: "MLA916044386",
            thumbnail: "image.png",
            title: "iPhone 11 64 Gb Blanco",
            price: { currency: "ARS", amount: "123456" },
          }
        }
      };
      const state = itemsReducer(initialState, action);
      expect(state.product.id).toEqual(action.payload.product.id);
    });

    it('sets fetching false when fetchProductDetail is rejected', () => {
      const action = { type: fetchProductDetail.rejected.type, error: { message: 'Despapayado' } };
      const state = itemsReducer(initialState, action);
      expect(state.error).toEqual(action.error.message);
    });
  });
});
