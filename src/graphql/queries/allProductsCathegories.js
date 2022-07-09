import { gql } from '@apollo/client';

export const ALL_PRODUCTS_CATHEGORIES = gql`
  query {
    productsCathegories {
      name
    }
  }
`;
