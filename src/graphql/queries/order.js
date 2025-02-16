import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  query ($input: OrdersInput) {
    orders: orders(input: $input) {
      allOrdersQuantity,
      orders {
        id,
        totalPrice,
        createdAt
      }
    }
  }
`;
