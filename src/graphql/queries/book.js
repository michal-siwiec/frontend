import { gql } from '@apollo/client';

export const GET_BOOKS = gql(`
  query {
    books: getBooks {
      id,
      title,
      comments {
        id,
        content
      },
      authors {
        id,
        firstName
      }
    }
  }
`);
