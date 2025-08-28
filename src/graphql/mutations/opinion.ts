import { gql } from '@apollo/client';

export const ADD_OPINION = gql(`
  mutation addOpinion($input: OpinionMutationInput!) {
    opinion: addOpinion(input: $input) {
      id
    }
  }
`);
