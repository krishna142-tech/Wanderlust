import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        {/* Optimized Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            y,
            willChange: 'transform'
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"
            style={{ opacity }}
          />
        </motion.div>

        {/* Optimized Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full particle-optimized"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Hero Content - OPTIMIZED */}
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4 animate-optimized">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-6"
          >
            <Sparkles className="h-12 w-12 text-sky-400 mx-auto mb-4" />
          </motion.div>

          {/* Main Title - OPTIMIZED */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Explore The
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 text-gradient-optimized"
            >
              {' '}World
            </motion.span>
          </motion.h1>

          {/* Description - OPTIMIZED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will last a lifetime.
          </motion.p>

          {/* Optimized Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookTrip}
              className="group relative bg-gradient-to-r from-sky-500 via-blue-500 to-orange-500 hover:from-sky-600 hover:via-blue-600 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 shadow-2xl overflow-hidden btn-optimized"
            >
              <span className="relative z-10">Book Your Adventure</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchVideo}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/40 glass-optimized"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
                className="bg-white/20 rounded-full p-2"
              >
                <Play className="h-5 w-5 fill-white" />
              </motion.div>
              Experience Video
            </motion.button>
          </motion.div>
        </div>

        {/* OPTIMIZED Floating Elements */}
        <motion.div
          className="absolute top-20 left-4 md:left-8 lg:left-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-sky-400/30 to-blue-500/30 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl glass-optimized"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          >
            <span className="text-3xl">✈️</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-4 md:right-8 lg:right-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-orange-400/30 to-pink-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl glass-optimized"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: -10,
              transition: { duration: 0.3 }
            }}
          >
            <span className="text-2xl">🌴</span>
          </motion.div>
        </motion.div>

        {/* Tablet Floating Elements */}
        <motion.div
          className="absolute top-16 left-1/3 hidden md:block lg:hidden z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 shadow-xl glass-optimized"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg">🗺️</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-1/4 hidden md:block lg:hidden z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-500/30 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 shadow-xl glass-optimized"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg">🎒</span>
          </motion.div>
        </motion.div>

        {/* OPTIMIZED Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
          onClick={scrollToDestinations}
        >
          <motion.div className="flex flex-col items-center">
            <motion.div
              className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden group-hover:border-white/90 transition-colors duration-300"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-1.5 h-4 bg-white rounded-full mt-2 group-hover:bg-white/90"
                animate={{
                  y: [0, 16, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-white/70 text-sm mt-4 font-medium text-center group-hover:text-white/90 transition-colors duration-300"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* OPTIMIZED Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideo}
                className="absolute top-6 right-6 z-20 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
              >
                <X className="h-6 w-6" />
              </motion.button>

              <div className="w-full h-full relative">
                <iframe
                  src="https://player.vimeo.com/video/158284739?autoplay=1&loop=1&muted=1&background=1"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Ultimate Adventure Experience"
                />
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 z-10"
              >
                <div className="text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">
                    Ultimate Adventure Experience
                  </h3>
                  <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed">
                    Feel the rush of adrenaline as you soar through the skies and experience the world from breathtaking heights.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['🪂 Skydiving', '⚡ Extreme Sports', '🌤️ Sky Adventures', '🎯 Adrenaline Rush'].map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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