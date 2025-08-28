import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addProductToBasket, clearBasket } from './actionCreators';
import { addProductToBasket as addProduct } from 'services/basket';
import { Products } from 'types/product';

const initialState: { addedProducts: Products } = { addedProducts: [] };
const persistConfig = { key: 'basket', storage };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addProductToBasket, (state, { payload }) => {
    addProduct(state.addedProducts, payload);
  });
  builder.addCase(clearBasket, (state) => {
    state.addedProducts = [];
  });
});

export default persistReducer(persistConfig, reducer);
