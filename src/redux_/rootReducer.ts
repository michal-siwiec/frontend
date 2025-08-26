import { combineReducers } from 'redux';
import basketReducer from './basket/reducer.js';
import userReducer from './user/reducer.js';
import orderReducer from './order/reducer.js';

export default combineReducers({ basket: basketReducer, user: userReducer, order: orderReducer });
