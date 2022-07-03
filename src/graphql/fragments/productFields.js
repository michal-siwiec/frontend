import { gql } from '@apollo/client';

export const productFields = gql`
  fragment productFields on Product {
    id
    name
    price
    availableQuantity
    picturePath
  }
`;
