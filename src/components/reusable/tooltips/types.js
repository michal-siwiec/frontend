import {
  exact,
  string,
  bool,
  element
} from 'prop-types';

export const propTypes = exact({
  headerText: string.isRequired,
  secondaryText: string.isRequired,
  open: bool.isRequired,
  placement: string,
  children: element.isRequired
}).isRequired;

export const defaultProps = {
  placement: 'top'
};
