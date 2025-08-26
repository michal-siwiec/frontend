import { combineReducers } from 'redux';
import basketReducer from './basket/reducer.js';
import userReducer from './user/reducer';
import orderReducer from './order/reducer';

export default combineReducers({ basket: basketReducer, user: userReducer, order: orderReducer });
