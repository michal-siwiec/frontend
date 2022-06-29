import { LOAD_PRODUCTS } from './types';

export const loadProducts = (products) => ({ type: LOAD_PRODUCTS, payload: products });
