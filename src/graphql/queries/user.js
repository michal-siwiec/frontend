import { gql } from '@apollo/client';

export const IS_USER_LOGGED = gql`
  query {
    auth: isUserLogged {
      isLogged
    }
  }
`;
