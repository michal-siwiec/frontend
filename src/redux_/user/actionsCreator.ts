import { createAction } from '@reduxjs/toolkit';
import { Avatars } from 'types/avatar';

type LoginPayload = { user: { id: string, avatars: Avatars } };
type CheckIfLoggedPayload = string | null
type UpdateAvatarsPayload = { user: { avatars: Avatars } }

export const login = createAction<LoginPayload>('login');
export const logout = createAction('logout');
export const checkIfLogged = createAction<CheckIfLoggedPayload>('checkIfLogged');
export const updateAvatars = createAction<UpdateAvatarsPayload>('updateAvatars');
