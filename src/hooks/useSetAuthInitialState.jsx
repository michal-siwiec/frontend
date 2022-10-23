import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { IS_USER_LOGGED } from 'graphql/queries/user.js';
import { checkIfLogged } from 'redux_/user/actionsCreator.js';

const useSetAuthInitialState = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(IS_USER_LOGGED, {
    onCompleted: () => dispatch(checkIfLogged(data.auth.userId)),
    onError: () => dispatch(checkIfLogged(null))
  });
};

export default useSetAuthInitialState;
