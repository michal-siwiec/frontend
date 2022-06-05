import { gql } from '@apollo/client';

export const ADD_OPINION = gql(`
  mutation addOpinion($input: OpinionInput!) {
    opinion: addOpinion(input: $input) {
      id
    }
  }
`);
