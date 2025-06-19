import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef<HTMLDivElement>(null);

  // Advanced cursor tracking with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    // Cursor variant handlers
    const handleMouseEnterButton = () => setCursorVariant('button');
    const handleMouseLeaveButton = () => setCursorVariant('default');
    const handleMouseEnterText = () => setCursorVariant('text');
    const handleMouseLeaveText = () => setCursorVariant('default');

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add event listeners for interactive elements
    const buttons = document.querySelectorAll('button, .cursor-button');
    const textElements = document.querySelectorAll('h1, h2, h3, p, .cursor-text');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnterButton);
      button.addEventListener('mouseleave', handleMouseLeaveButton);
    });

    textElements.forEach(text => {
      text.addEventListener('mouseenter', handleMouseEnterText);
      text.addEventListener('mouseleave', handleMouseLeaveText);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnterButton);
        button.removeEventListener('mouseleave', handleMouseLeaveButton);
      });

      textElements.forEach(text => {
        text.removeEventListener('mouseenter', handleMouseEnterText);
        text.removeEventListener('mouseleave', handleMouseLeaveText);
      });
    };
  }, [cursorX, cursorY]);

  if (loading) {
    return <Loader />;
  }

  const getCursorVariants = () => {
    switch (cursorVariant) {
      case 'button':
        return {
          scale: 1.5,
          backgroundColor: 'rgba(14, 165, 233, 0.8)',
          mixBlendMode: 'difference' as const,
        };
      case 'text':
        return {
          scale: 2,
          backgroundColor: 'rgba(249, 115, 22, 0.6)',
          mixBlendMode: 'difference' as const,
        };
      default:
        return {
          scale: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          mixBlendMode: 'difference' as const,
        };
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 cursor-none">
        {/* Single Advanced Custom Cursor */}
        <motion.div
          ref={cursorRef}
          className="fixed w-8 h-8 pointer-events-none z-[9999] rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: -16,
            y: -16,
          }}
          animate={getCursorVariants()}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 400,
            mass: 0.5
          }}
        >
          {/* Main cursor dot */}
          <motion.div
            className="w-full h-full rounded-full"
            animate={{
              scale: cursorVariant === 'default' ? [1, 1.2, 1] : 1,
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              backgroundColor: 'currentColor',
            }}
          />
          
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-current rounded-full"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          
          {/* Energy ring */}
          <motion.div
            className="absolute inset-0 border border-current rounded-full"
            animate={{
              scale: [1, 3.5, 1],
              opacity: [0.7, 0, 0.7],
              rotate: [0, -360, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Particle effects */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 20, 0],
                y: [0, Math.sin(i * Math.PI / 2) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Global Ripple Effect Container */}
        <div 
          id="ripple-container" 
          className="fixed inset-0 pointer-events-none z-[9998]"
          onClick={(e) => {
            const ripple = document.createElement('div');
            ripple.className = 'absolute w-4 h-4 bg-sky-400/30 rounded-full pointer-events-none';
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.zIndex = '9997';
            ripple.style.animation = 'ripple-expand 0.6s ease-out forwards';
            document.body.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
          }}
        />

        {/* Global Magnetic Field Visualization */}
        <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-sky-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (mousePosition.x - window.innerWidth / 2) * 0.01, 0],
                y: [0, (mousePosition.y - window.innerHeight / 2) * 0.01, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <Navbar />
        <Hero />
        <Destinations />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;