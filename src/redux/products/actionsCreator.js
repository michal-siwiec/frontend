import { ADD_PRODUCTS } from './types';

export const addProductsToBasket = (products) => ({ type: ADD_PRODUCTS, payload: products });
