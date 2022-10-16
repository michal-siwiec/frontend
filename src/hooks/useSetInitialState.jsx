import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { IS_USER_LOGGED } from 'graphql/queries/user.js';
import { checkIfLogged } from 'redux_/user/actionsCreator.js';

const useSetInitialState = () => {
  const dispatch = useDispatch();
  const { data, error } = useQuery(IS_USER_LOGGED);

  const handleDataReceive = () => {
    if (!data) return;

    const { auth: { userId } } = data;
    dispatch(checkIfLogged(userId));
  };

  const handleError = () => {
    if (!error) return;

    dispatch(checkIfLogged(null));
  };

  useEffect(handleDataReceive, [data]);
  useEffect(handleError, [error]);
};

export default useSetInitialState;
