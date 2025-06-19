import { motion } from 'framer-motion';
import React from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  delay = 0,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;