import { gql } from '@apollo/client';

export const REGISTER_USER = gql(`
  mutation registerUser($input: UserInput!) {
    user: registerUser(input: $input) {
      id
    }
  }
`);
