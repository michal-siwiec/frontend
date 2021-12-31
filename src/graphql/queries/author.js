import { gql } from '@apollo/client';

export const GET_AUTHOR = gql(`
  query($id: ID!) {
    author: getAuthor(id: $id) {
      id,
      firstName,
      lastName
    }
  }
`)
