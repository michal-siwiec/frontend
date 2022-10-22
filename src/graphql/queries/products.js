import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query ($input: ProductInput) {
    productsDetails: products(input: $input) {
      quantity,
      products {
        id
        name
        price
        availableQuantity
        picturePath
      }
    }
  }
`;
