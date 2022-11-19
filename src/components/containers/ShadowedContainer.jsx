import React from 'react';
import { exact, element, string, object } from 'prop-types';
import { motion } from 'framer-motion';

const ShadowedContainer = ({ children, classNames, animationAttributes, dataCy }) => (
  <motion.div
    className={`shadowed-box ${classNames}`}
    data-cy={dataCy}
    {...animationAttributes}
  >
    {children}
  </motion.div>
);

ShadowedContainer.propTypes = exact({
  children: element.isRequired,
  classNames: string.isRequired,
  animationAttributes: object,
  dataCy: string
}).isRequired;

ShadowedContainer.defaultProps = {
  classNames: '',
  animationAttributes: {},
  dataCy: ''
};

export default ShadowedContainer;
