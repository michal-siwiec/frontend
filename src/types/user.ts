import { Avatars } from 'types/avatar';

export type LoginUserResponse = {
  user: {
    id: string,
    avatars: Avatars,
    __typename: string
  }
};

export type UserPersonalDetailsResponse = {
  user: {
    email: string,
    name: string | null,
    surname: string | null,
    phoneNumber: string,
    city: string | null,
    postalCode: string | null,
    street: string | null,
    __typename: string
  }
}
