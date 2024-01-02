import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($input: RegisterUserInput!) {
    user: registerUser(input: $input) {
      id,
      avatars {
        main,
        key,
        bucket
      }
    }
  }
`;

export const REMOVE_ACCOUNT = gql`
  mutation removeAccount($userId: ID!) {
    user: removeUser(userId: $userId) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($input: LoginUserInput!) {
    user: loginUser(input: $input) {
      id,
      avatars {
        main,
        key,
        bucket
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser($input: LogoutUserInput!) {
    user: logoutUser(input: $input) {
      id
    }
  }
`;

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation subscribeUserToNewsletter($input: SubscribeUserToNewsletterInput!) {
    subscribeUserToNewsletter(input: $input) {
      id
    }
  }
`;

export const UNSUBSCRIBE_FROM_NEWSLETTER = gql`
  mutation unsubscribeUserFromNewsletter($email: String!) {
    unsubscribeUserFromNewsletter(email: $email) {
      id
    }
  }
`;

export const CHANGE_USER_PASSWORD = gql`
  mutation changeUserPassword($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

export const UPDATE_USER_DETAILS = gql`
  mutation updateUserDetails($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

export const UPDATE_USER_AVATARS = gql`
  mutation updateUserAvatars($input: UpdateUserInput!) {
    user: updateUser(input: $input) {
      avatars {
        main,
        key,
        bucket
      }
    }
  }
`;
