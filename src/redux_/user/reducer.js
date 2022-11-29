import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { login, logout, checkIfLogged, updateAvatars } from './actionsCreator.js';

const initialState = { loggedUserId: null, avatars: [] };
const persistConfig = { key: 'user', storage };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, { payload: { user: { id, avatars } } }) => {
      state.loggedUserId = id;
      state.avatars = avatars;
    })
    .addCase(logout, (state) => {
      state.loggedUserId = null;
      state.avatars = [];
    })
    .addCase(checkIfLogged, (state, { payload: userID }) => {
      state.loggedUserId = userID;
    })
    .addCase(updateAvatars, (state, { payload: { user: { avatars } } }) => {
      state.avatars = avatars;
    });
});

export default persistReducer(persistConfig, reducer);
