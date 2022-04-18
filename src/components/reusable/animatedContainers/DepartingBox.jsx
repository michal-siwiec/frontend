import React from 'react';
import { motion } from 'framer-motion';
import { propTypes } from '../../../props/reusable/departingBox';

const DepartingBox = ({ children, order }) => (
  <motion.div
    animate={{ x: 100 }}
    transition={{ ease: 'easeOut', duration: 2, delay: order * 0.5 }}
  >
    {children}
  </motion.div>
);

DepartingBox.propTypes = propTypes;

export default DepartingBox;
