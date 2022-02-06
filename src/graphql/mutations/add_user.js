import { gql } from '@apollo/client';

export const ADD_USER = gql(`
  mutation createUser($input: UserInput!) {
    user: createUser(input: $input) {
      id
    }
  }
`);
