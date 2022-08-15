import React from 'react';
import {
  exact,
  element,
  string,
  object
} from 'prop-types';
import { motion } from 'framer-motion';

const ShadowedBox = ({ children, classNames, animationAttributes }) => (
  <motion.div
    className={`shadowed-box ${classNames}`}
    {...animationAttributes}
  >
    {children}
  </motion.div>
);

ShadowedBox.propTypes = exact({
  children: element.isRequired,
  classNames: string.isRequired,
  animationAttributes: object
}).isRequired;

ShadowedBox.defaultProps = {
  classNames: '',
  animationAttributes: {}
};

export default ShadowedBox;
