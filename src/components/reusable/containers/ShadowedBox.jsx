import React from 'react';
import { exact, element, string } from 'prop-types';

const ShadowedBox = ({ children, classNames }) => (
  <div className={`shadowed-box ${classNames}`}>
    {children}
  </div>
);

ShadowedBox.propTypes = exact({
  children: element.isRequired,
  classNames: string.isRequired
}).isRequired;

ShadowedBox.defaultProps = {
  classNames: ''
};

export default ShadowedBox;
