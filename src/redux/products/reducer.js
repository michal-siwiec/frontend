import { LOAD_PRODUCTS } from './types';

const initialState = { list: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOAD_PRODUCTS:
      return {...state, list: payload };
    default: 
      return state;
  }
};

export default reducer;
