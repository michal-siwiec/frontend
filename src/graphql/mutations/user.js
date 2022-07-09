import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($input: UserInput!) {
    user: registerUser(input: $input) {
      id,
      email,
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($input: UserAuthenticationInput!) {
    user: loginUser(input: $input) {
      id
    }
  }
`;

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation subscribeToNewsletter($email: String!) {
    subscribeToNewsletter(email: $email) {
      id
    }
  }
`;
