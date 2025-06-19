import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-wide"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-8 md:p-12 border border-gray-200 dark:border-gray-700 transition-all duration-300"
        >
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg leading-relaxed mb-6"
            >
              I'm a passionate software developer with a fresh perspective and enthusiasm for creating 
              innovative digital solutions. As a recent graduate in Computer Application, I bring strong 
              foundational knowledge combined with hands-on experience from personal projects and workouts.
            </motion.p>
            
            {/* Add similar motion wrappers to other paragraphs */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;