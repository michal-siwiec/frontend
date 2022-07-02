import { createReducer } from '@reduxjs/toolkit'
import { addProductToBasket, clearBasket } from './actionCreators';
import { addProduct } from './helpers';

const initialState = { addedProducts: [] };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addProductToBasket, (state, { payload }) => {
    addProduct({ addedProducts: state.addedProducts, payload });
  });
  
  builder.addCase(clearBasket, (state) => {
    state.addedProducts = [];
  });
});

export default reducer;
