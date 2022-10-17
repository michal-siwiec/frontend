import { createAction } from '@reduxjs/toolkit';

export const setName = createAction('setName');
export const setSurname = createAction('setSurname');
export const setStreet = createAction('setStreet');
export const setCity = createAction('setCity');
export const setPostalCode = createAction('setPostalCode');
export const setEmail = createAction('setEmail');
export const setPhoneNumber = createAction('setPhoneNumber');
export const setDeliveryMethod = createAction('setDeliveryMethod');
export const setPaymentMethod = createAction('setPaymentMethod');
