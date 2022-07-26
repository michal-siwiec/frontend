import { gql } from '@apollo/client';
import { productFields } from '../fragments/productFields.js';

export const GET_PROMOTED_PRODUCTS = gql`
  ${productFields}

  query {
    promotedProducts { ...productFields }
  }
`;
