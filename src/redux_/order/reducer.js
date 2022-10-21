import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  setName,
  setSurname,
  setStreet,
  setCity,
  setPostalCode,
  setEmail,
  setPhoneNumber,
  setDeliveryMethod,
  setPaymentMethod,
  setCompletedOrder
} from './actionsCreator.js';

const persistConfig = { key: 'order', storage };
const initialState = {
  clientDetails: {
    name: '',
    surname: '',
    street: '',
    city: '',
    postalCode: '',
    email: '',
    phoneNumber: ''
  },
  delivery: {
    inPost: true,
    dpd: false,
    pickUpAtThePoint: false
  },
  payment: {
    cashPayment: false,
    traditionalTransfer: true
  },
  orderID: null,
  totalPrice: null,
  paymentMethod: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, { payload }) => {
      state.clientDetails.name = payload;
    })

    .addCase(setSurname, (state, { payload }) => {
      state.clientDetails.surname = payload;
    })

    .addCase(setStreet, (state, { payload }) => {
      state.clientDetails.street = payload;
    })

    .addCase(setCity, (state, { payload }) => {
      state.clientDetails.city = payload;
    })

    .addCase(setPostalCode, (state, { payload }) => {
      state.clientDetails.postalCode = payload;
    })

    .addCase(setEmail, (state, { payload }) => {
      state.clientDetails.email = payload;
    })

    .addCase(setPhoneNumber, (state, { payload }) => {
      state.clientDetails.phoneNumber = payload;
    })

    .addCase(setDeliveryMethod, (state, { payload: { inPost, dpd, pickUpAtThePoint } }) => {
      state.delivery.inPost = inPost;
      state.delivery.dpd = dpd;
      state.delivery.pickUpAtThePoint = pickUpAtThePoint;
    })

    .addCase(setPaymentMethod, (state, { payload: { cashPayment, traditionalTransfer } }) => {
      state.payment.cashPayment = cashPayment;
      state.payment.traditionalTransfer = traditionalTransfer;
    })

    .addCase(setCompletedOrder, (state, { payload: { order: { id, totalPrice, paymentMethod } } }) => {
      state.orderID = id;
      state.totalPrice = totalPrice;
      state.paymentMethod = paymentMethod;
    });
});

export default persistReducer(persistConfig, reducer);
