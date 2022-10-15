import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './actionsCreator.js';

const initialState = { loggedUserId: null };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, { payload: userID }) => {
      state.loggedUserId = userID;
    })
    .addCase(logout, (state) => {
      state.loggedUserId = null;
    });
});

export default reducer;
