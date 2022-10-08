import { gql } from '@apollo/client';

export const GET_OPINIONS = gql`
  query($input: OpinionFiltrationInput) {
    opinionsDetails: opinions(input: $input) {
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
      allOpinionsQuantity
    }
  }
`;
