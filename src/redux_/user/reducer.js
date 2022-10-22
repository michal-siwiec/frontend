import { createReducer } from '@reduxjs/toolkit';
import { login, logout, checkIfLogged } from './actionsCreator.js';

const initialState = { loggedUserId: null, avatars: [] };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, { payload: { user: { id, avatars } } }) => {
      state.loggedUserId = id;
      state.avatars = avatars;
    })
    .addCase(logout, (state) => {
      state.loggedUserId = null;
    })
    .addCase(checkIfLogged, (state, { payload: userID }) => {
      state.loggedUserId = userID;
    });
});

export default reducer;
