import { Avatars } from 'types/avatar';

export type LoginUserResponse = {
  user: {
    id: string,
    avatars: Avatars,
    __typename: string
  }
};
