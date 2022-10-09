import { gql } from '@apollo/client';
import { productFields } from '../fragments/productFields.js';

export const GET_PRODUCTS = gql`
  ${productFields}

  query ($input: ProductInput) {
    productsDetails: products(input: $input) {
      quantity,
      products {
        ...productFields
      }
    }
  }
`;
