import { gql } from '@apollo/client';

export const GET_OPINIONS = gql(`
  query {
    opinions {
      content
      mark
      updatedAt
      user {
        email
        avatars {
          main
          storagePath
        }
      }
    }
  }
`);
