import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Plane } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    let element = document.querySelector(href);
    
    // Fallback for sections that might have different IDs
    if (!element) {
      switch (targetId) {
        case 'home':
          element = document.querySelector('#home') || document.querySelector('section');
          break;
        case 'destinations':
          element = document.querySelector('#destinations');
          break;
        case 'statistics':
          element = document.querySelector('#statistics') || document.querySelector('[class*="stats"]') || document.querySelector('[class*="Stats"]');
          break;
        case 'testimonials':
          element = document.querySelector('#testimonials');
          break;
        case 'contact':
          element = document.querySelector('#contact');
          break;
        default:
          // If section doesn't exist, show a message
          alert(`🚧 ${targetId.charAt(0).toUpperCase() + targetId.slice(1)} section is coming soon! \n\nWe're working on adding more amazing features to enhance your travel experience.`);
          setIsOpen(false);
          return;
      }
    }
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback message if section still not found
      alert(`🚧 ${targetId.charAt(0).toUpperCase() + targetId.slice(1)} section is coming soon! \n\nWe're working on adding more amazing features to enhance your travel experience.`);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    const homeElement = document.querySelector('#home') || document.querySelector('section');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-button"
          >
            <Plane className="h-8 w-8 text-sky-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white cursor-text">
              Wanderlust
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-button"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-button"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 cursor-button"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 cursor-button"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
