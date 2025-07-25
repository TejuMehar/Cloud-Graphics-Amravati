import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './styles/animations.css';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Scroll animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
           <motion.div
  whileHover={{ scale: 1.08 }}
  className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent shadow-md drop-shadow-xl"
>
  Cloud Graphics
</motion.div>

            {/* Desktop Navigation */}
            <Navigation activeSection={activeSection} className="hidden md:flex" />

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button> */}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <Navigation 
                activeSection={activeSection} 
                className="flex flex-col p-4 space-y-2"
                mobile
                onItemClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.section id="hero" variants={itemVariants}>
            <Hero />
          </motion.section>

          <motion.section 
            id="about"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <About />
          </motion.section>

          <motion.section 
            id="experience"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {/* <Experience /> */}
          </motion.section>

          <motion.section 
            id="skills"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Skills />
          </motion.section>

          <motion.section 
            id="projects"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.section>

          <motion.section 
            id="contact"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
  <footer className="bg-gray-50 dark:bg-gray-800 py-8">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
  >
   
  
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      © 2024 Cloud Graphics. Crafted with passion and attention to detail.
    </p>
   
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      Designed and Developed by <span className="font-semibold">Tejas Mehar</span>
    </p>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      📧 <a href="https://wa.me/917447746247" className="underline hover:text-blue-500">Contact</a>
    </p>

   
  </motion.div>
</footer>

    </div>
  );
}

export default App;