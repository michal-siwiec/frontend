import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation addOrder($input: AddOrderInput!) {
    order: addOrder(input: $input) {
      id,
      totalPrice,
      paymentMethod
    }
  }
`;
