import { combineReducers } from 'redux';
import productsReducer from './products/reducer.js';
import basketReducer from './basket/reducer.js';
import userReducer from './user/reducer.js';

export default combineReducers({
  products: productsReducer,
  basket: basketReducer,
  user: userReducer
});
