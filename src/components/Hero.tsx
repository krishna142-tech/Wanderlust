import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, X } from 'lucide-react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';
import RippleEffect from './RippleEffect';
import TextReveal from './TextReveal';
import MorphingShape from './MorphingShape';
import LiquidButton from './LiquidButton';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // GSAP timeline for hero entrance
    const tl = gsap.timeline();
    
    tl.from('.hero-bg', {
      scale: 1.2,
      duration: 2,
      ease: "power2.out"
    })
    .from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1")
    .from('.floating-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToDestinations = () => {
    const element = document.querySelector('#destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTrip = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Parallax Background */}
        <motion.div 
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            y
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"
            style={{ opacity }}
          />
        </motion.div>

        {/* Morphing Shapes */}
        <MorphingShape className="top-20 left-20 w-32 h-32 opacity-30" />
        <MorphingShape className="bottom-20 right-20 w-24 h-24 opacity-20" />

        {/* Advanced Particle System */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Hero Content with Advanced Animations - FIXED Z-INDEX */}
        <div className="hero-content relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6"
          >
            <Sparkles className="h-12 w-12 text-sky-400 mx-auto mb-4" />
          </motion.div>

          {/* Main Title - FIXED */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Explore The
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {' '}World
            </motion.span>
          </motion.h1>

          {/* Description - FIXED */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will last a lifetime.
          </motion.p>

          {/* Advanced Interactive Buttons - FIXED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <RippleEffect>
              <MagneticButton
                onClick={handleBookTrip}
                className="group relative bg-gradient-to-r from-sky-500 via-blue-500 to-orange-500 hover:from-sky-600 hover:via-blue-600 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-500 shadow-2xl overflow-hidden"
                strength={0.4}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Book Your Adventure</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </MagneticButton>
            </RippleEffect>

            <LiquidButton
              onClick={handleWatchVideo}
              className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 border border-white/20"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 rounded-full p-2"
              >
                <Play className="h-5 w-5 fill-white" />
              </motion.div>
              Experience Video
            </LiquidButton>
          </motion.div>
        </div>

        {/* FIXED Floating Elements with Higher Z-Index */}
        <motion.div
          className="floating-element absolute top-20 left-4 md:left-8 lg:left-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-sky-400/30 to-blue-500/30 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 15,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)"
            }}
          >
            <span className="text-3xl">✈️</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="floating-element absolute bottom-32 right-4 md:right-8 lg:right-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-orange-400/30 to-pink-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: -15,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
            }}
          >
            <span className="text-2xl">🌴</span>
          </motion.div>
        </motion.div>

        {/* Additional Floating Elements for Tablets */}
        <motion.div
          className="floating-element absolute top-16 left-1/3 hidden md:block lg:hidden z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 shadow-xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg">🗺️</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="floating-element absolute bottom-16 left-1/4 hidden md:block lg:hidden z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-500/30 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 shadow-xl"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg">🎒</span>
          </motion.div>
        </motion.div>

        {/* Advanced Scroll Indicator - FIXED */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
          onClick={scrollToDestinations}
        >
          <motion.div className="flex flex-col items-center">
            <motion.div
              className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden group-hover:border-white/90 transition-colors duration-300"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-1.5 h-4 bg-white rounded-full mt-2 group-hover:bg-white/90"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-white/70 text-sm mt-4 font-medium text-center group-hover:text-white/90 transition-colors duration-300"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Advanced Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Advanced Close Button */}
              <MagneticButton
                onClick={closeVideo}
                className="absolute top-6 right-6 z-20 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
                strength={0.3}
              >
                <X className="h-6 w-6" />
              </MagneticButton>

              {/* Video with Advanced Loading */}
              <div className="w-full h-full relative">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/158284739?autoplay=1&loop=1&muted=1&background=1"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Ultimate Adventure Experience"
                  />
                </motion.div>
              </div>

              {/* Advanced Video Overlay */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 z-10"
              >
                <div className="text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-2xl md:text-4xl font-bold mb-3"
                  >
                    Ultimate Adventure Experience
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed"
                  >
                    Feel the rush of adrenaline as you soar through the skies and experience the world from breathtaking heights. 
                    Push your limits with our extreme adventure packages designed for thrill-seekers.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, staggerChildren: 0.1 }}
                  >
                    {['🪂 Skydiving', '⚡ Extreme Sports', '🌤️ Sky Adventures', '🎯 Adrenaline Rush'].map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;