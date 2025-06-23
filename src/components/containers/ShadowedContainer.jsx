import { exact, element, string, object } from 'prop-types';
import { motion } from 'framer-motion';

const ShadowedContainer = ({ children, classNames, animationAttributes }) => (
  <motion.div
    className={`shadowed-box ${classNames}`}
    {...animationAttributes}
  >
    {children}
  </motion.div>
);

ShadowedContainer.propTypes = exact({
  children: element.isRequired,
  classNames: string.isRequired,
  animationAttributes: object
}).isRequired;

ShadowedContainer.defaultProps = {
  classNames: '',
  animationAttributes: {}
};

export default ShadowedContainer;
