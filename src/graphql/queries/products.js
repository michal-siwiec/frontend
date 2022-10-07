import { gql } from '@apollo/client';
import { productFields } from '../fragments/productFields.js';

export const GET_PRODUCTS = gql`
  ${productFields}

  query ($promoted: Boolean) {
    products(promoted: $promoted) {
      ...productFields
    }
  }
`;
