import React, { ReactElement } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ShadowedContainerProps = {
  children: ReactElement,
  animationAttributes?: Omit<HTMLMotionProps<'div'>, 'className' | 'children'>;
  classNames?: string,
  dataTestid?: string
};

// TODO: Rename dataTestid to dataTestID
const ShadowedContainer = ({ children, classNames = '', animationAttributes = {}, dataTestid = undefined }: ShadowedContainerProps) => (
  <motion.div
    className={`shadowed-box ${classNames}`}
    {...animationAttributes}
    data-testid={dataTestid}
  >
    {children}
  </motion.div>
);

export default ShadowedContainer;
