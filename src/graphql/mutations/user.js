import { gql } from '@apollo/client';

export const REGISTER_USER = gql(`
  mutation registerUser($input: RegisterInput!) {
    user: registerUser(input: $input) {
      id,
      email,
      password
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      id
    }
  }
`);

export const TEST_USER = gql(`
  mutation {
    testUser {
      id
    }
  }
`);
