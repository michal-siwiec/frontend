import React from 'react';
import { motion } from "framer-motion"

const DepartingBox = ({ children, order }) => {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2, delay: order * 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default DepartingBox;
