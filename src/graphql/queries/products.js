import { gql } from '@apollo/client';
import { productFields } from '../fragments/productFields.js';

export const GET_PRODUCTS = gql`
  ${productFields}

  query ($productInput: ProductInput) {
    productsDetails: products(productInput: $productInput) {
      allProductsQuantity,
      products {
        ...productFields
      }
    }
  }
`;
