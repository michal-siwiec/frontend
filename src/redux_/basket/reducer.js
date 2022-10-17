import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addProductToBasket, clearBasket } from './actionCreators.js';
import { addProduct, clear } from './helpers.js';

const initialState = { addedProducts: [] };
const persistConfig = { key: 'basket', storage };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addProductToBasket, (state, { payload }) => {
    addProduct({ addedProducts: state.addedProducts, payload });
  });

  builder.addCase(clearBasket, (state) => {
    clear(state.addedProducts);
  });
});

export default persistReducer(persistConfig, reducer);
