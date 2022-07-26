import { gql } from '@apollo/client';
import { productFields } from '../fragments/productFields.js';

export const GET_ALL_PRODUCTS = gql`
  ${productFields}

  query {
    allProducts { ...productFields }
  }
`;
