import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ children, className = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"
        initial={{ scale: 0, borderRadius: "50%" }}
        animate={{
          scale: isHovered ? 1.2 : 0,
          borderRadius: isHovered ? "0%" : "50%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      
      {/* Liquid blob effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: isHovered 
            ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default LiquidButton;