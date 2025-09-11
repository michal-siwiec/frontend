import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types/store';

const useIsLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const loggedUserId = useSelector((store: RootState) => store.user.loggedUserId);

  useEffect(() => setIsLogged(!!loggedUserId), [loggedUserId]);

  return isLogged;
};

export default useIsLogged;
