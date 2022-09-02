import { useQuery } from '@apollo/client';
import { IS_USER_LOGGED } from 'graphql/queries/user.js';

const useIsLogged = () => {
  const { data } = useQuery(IS_USER_LOGGED);
  const userID = localStorage.getItem('userID');
  if (userID && data?.auth?.isLogged) return true;

  return false;
};

export default useIsLogged;
