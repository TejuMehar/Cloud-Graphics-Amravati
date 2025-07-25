import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import design1 from '../assets/design1.jpg';
import design2 from '../assets/design2.jpg';
import design3 from '../assets/design3.jpg';
import design4 from '../assets/design4.jpg';
import design5 from '../assets/design5.jpg';
import design6 from '../assets/design6.jpg';

const Projects: React.FC = () => {
  
const images = [design1,design2, design3, design4,design5,design6];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working with
            </p>
          </motion.div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {images.map((img, index) => (
    <div key={index} className="rounded-lg overflow-hidden shadow-lg h-64 w-full">
      <img
        src={img}
        alt={`Design ${index + 1}`}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>

          <motion.div 
            variants={itemVariants} 
            className="flex justify-center px-2 sm:px-0"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/cloud_graphics27/profilecard/?igsh=MXh2Njdkb3BpYm54OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base"
            >
              View More Projects on GitHub
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-3xl p-6 sm:p-8 mx-2 sm:mx-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;