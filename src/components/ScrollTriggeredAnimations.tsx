import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggeredAnimationsProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'slideLeft' | 'scale' | 'rotate' | 'morphText' | 'parallax';
}

const ScrollTriggeredAnimations: React.FC<ScrollTriggeredAnimationsProps> = ({ 
  children, 
  className = '',
  animationType = 'fadeUp'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      switch (animationType) {
        case 'parallax':
          gsap.to(element, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
          break;
        
        case 'morphText':
          gsap.fromTo(element.querySelectorAll('.morph-text'), {
            scaleX: 0,
            transformOrigin: "left center"
          }, {
            scaleX: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
          break;
      }
    }, element);

    return () => ctx.revert();
  }, [animationType]);

  const variants = {
    hidden: {
      opacity: 0,
      y: animationType === 'fadeUp' ? 60 : 0,
      x: animationType === 'slideLeft' ? -60 : 0,
      scale: animationType === 'scale' ? 0.8 : 1,
      rotate: animationType === 'rotate' ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTriggeredAnimations;