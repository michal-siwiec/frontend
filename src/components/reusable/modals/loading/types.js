import { exact, bool, string } from 'prop-types';

export const propTypes = exact({
  open: bool.isRequired,
  info: string.isRequired
}).isRequired;
