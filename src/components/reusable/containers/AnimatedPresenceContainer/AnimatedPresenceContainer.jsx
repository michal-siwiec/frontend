import React from 'react';
import { exact, element, string } from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { findVariantArrtibutes } from './helpers.js';

const AnimatedPresenceContainer = ({ children, variantName }) => {
  const variantAttributes = findVariantArrtibutes(variantName);

  return (
    <AnimatePresence>
      <motion.div
        {...variantAttributes}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

AnimatedPresenceContainer.propTypes = exact({
  children: element.isRequired,
  variantName: string
}).isRequired;

AnimatedPresenceContainer.defaultProps = {
  variantName: 'default'
};

export default AnimatedPresenceContainer;
