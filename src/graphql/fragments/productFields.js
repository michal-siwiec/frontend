import { gql } from '@apollo/client';

export const productFields = gql`
  fragment productFields on ProductObject {
    id
    name
    price
    availableQuantity
    picturePath
  }
`;
