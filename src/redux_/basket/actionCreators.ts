import { createAction } from '@reduxjs/toolkit';
import { Product } from 'types/product';

export const addProductToBasket = createAction<Product>('addToBasket');
export const clearBasket = createAction('clearBasket');
