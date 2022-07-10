import { useQuery } from '@apollo/client';
import { IS_USER_LOGGED } from '../graphql/queries/user';

const useIsLogged = () => {
  const { loading, error, data } = useQuery(IS_USER_LOGGED);
  const userID = localStorage.getItem("userID")

  if (userID && data?.auth?.isLogged) return true;
};

export default useIsLogged;
