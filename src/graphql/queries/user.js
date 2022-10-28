import { gql } from '@apollo/client';

export const IS_USER_LOGGED = gql`
  query {
    auth: isUserLogged {
      userId
    }
  }
`;

export const USER_PERSONAL_DETAILS = gql`
  query($userId: ID!) {
    user: user(userId: $userId) {
      name
      surname
      email
      phoneNumber
      city
      postalCode
      street
    }
  }
`;
