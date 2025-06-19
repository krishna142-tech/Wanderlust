import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const CursorTrail: React.FC = () => {
  const { position, isHovering } = useCursor();
  const trailRef = useRef<HTMLDivElement[]>([]);
  const positions = useRef<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    positions.current.push({ x: position.x, y: position.y });
    if (positions.current.length > 20) {
      positions.current.shift();
    }
  }, [position]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className={`fixed w-6 h-6 rounded-full border-2 border-sky-400 mix-blend-difference transition-all duration-200 ${
          isHovering ? 'scale-150 bg-sky-400/20' : 'scale-100'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Trail dots */}
      {positions.current.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed w-2 h-2 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full mix-blend-screen"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: (index + 1) / positions.current.length * 0.6,
            scale: (index + 1) / positions.current.length,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Ripple effect on click */}
      <motion.div
        className="fixed w-8 h-8 border border-sky-400 rounded-full"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  );
};

export default CursorTrail;