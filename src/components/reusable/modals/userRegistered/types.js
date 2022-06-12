import { exact, bool, func } from 'prop-types';

export const propTypes = exact({
  open: bool.isRequired,
  setUserRegisterWithSuccess: func.isRequired
}).isRequired;
