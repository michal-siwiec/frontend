import { ADD_PRODUCTS } from './types';

const initialState = { products: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_PRODUCTS:
      return {...state, products: payload };
    default: 
      return state;
  }
};

export default reducer;
