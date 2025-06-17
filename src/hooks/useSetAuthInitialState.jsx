import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { IS_USER_LOGGED } from 'graphql/queries/user.js';
import { checkIfLogged } from 'redux_/user/actionsCreator.js';

const useSetAuthInitialState = () => {
  const dispatch = useDispatch();
  useQuery(IS_USER_LOGGED, {
    onCompleted: (data) => dispatch(checkIfLogged(data.auth.userId)),
    onError: () => dispatch(checkIfLogged(null))
  });
};

export default useSetAuthInitialState;
