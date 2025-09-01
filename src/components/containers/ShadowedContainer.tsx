import React, { ReactElement } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ShadowedContainerProps = {
  children: ReactElement,
  animationAttributes?: Omit<HTMLMotionProps<'div'>, 'className' | 'children'>;
  classNames?: string,
  dataTestId?: string
};

const ShadowedContainer = ({ children, classNames = '', animationAttributes = {}, dataTestId = undefined }: ShadowedContainerProps) => (
  <motion.div
    className={`shadowed-box ${classNames}`}
    {...animationAttributes}
    data-testid={dataTestId}
  >
    {children}
  </motion.div>
);

export default ShadowedContainer;
