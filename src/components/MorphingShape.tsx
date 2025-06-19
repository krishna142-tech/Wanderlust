import React from 'react';
import { motion } from 'framer-motion';

interface MorphingShapeProps {
  className?: string;
}

const MorphingShape: React.FC<MorphingShapeProps> = ({ className = '' }) => {
  const pathVariants = {
    initial: {
      d: "M60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 Z",
    },
    animate: {
      d: [
        "M60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 Z",
        "M80,40 C120,40 120,80 80,80 C40,80 40,40 80,40 Z",
        "M100,20 C140,20 140,100 100,100 C60,100 60,20 100,20 Z",
        "M80,40 C120,40 120,80 80,80 C40,80 40,40 80,40 Z",
        "M60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 C60,60 60,60 60,60 Z",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`absolute ${className}`}>
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
          fill="url(#morphGradient)"
          stroke="rgba(14, 165, 233, 0.5)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default MorphingShape;