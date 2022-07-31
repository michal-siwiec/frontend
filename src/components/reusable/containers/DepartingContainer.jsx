import React from 'react';
import { motion } from 'framer-motion';
import { exact, element, number } from 'prop-types';

const DepartingContainer = ({ children, order }) => (
  <motion.div
    animate={{ x: 100 }}
    transition={{ ease: 'easeOut', duration: 2, delay: order * 0.5 }}
  >
    {children}
  </motion.div>
);

DepartingContainer.propTypes = exact({
  children: element.isRequired,
  order: number.isRequired
}).isRequired;

export default DepartingContainer;
