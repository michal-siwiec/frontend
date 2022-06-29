import { createReducer } from '@reduxjs/toolkit'
import { addProductToBasket } from './actionCreators';
import { generateUpdatedAddedProducts } from './helper';

const initialState = { addedProducts: [] };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductToBasket, (state, { payload }) => {
      generateUpdatedAddedProducts({ state, payload });
    });
});

export default reducer;
