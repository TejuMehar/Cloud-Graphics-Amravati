import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  className?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  className = '', 
  mobile = false,
  onItemClick 
}) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

 const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = mobile ? 60 : 80; // Adjusted for mobile
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  // Delay closing so scroll can begin
  setTimeout(() => {
    onItemClick?.();
  }, 380);
};


  return (
    <nav className={`${className} ${mobile ? 'flex flex-col space-y-2' : 'flex space-x-2'}`}>
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: mobile ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeSection === item.id
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          } ${mobile ? 'w-full text-left' : ''}`}
        >
          <span className="relative inline-block">
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0  mt-15 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export default Navigation;
