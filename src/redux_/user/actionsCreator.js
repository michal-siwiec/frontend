import { createAction } from '@reduxjs/toolkit';

export const login = createAction('login');
export const logout = createAction('logout');
export const checkIfLogged = createAction('checkIfLogged');
export const updateAvatars = createAction('updateAvatars');
