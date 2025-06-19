import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Sparkles, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToDestinations = () => {
    const element = document.querySelector('#destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTrip = () => {
    // Scroll to contact form for booking
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
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
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

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <Sparkles className="h-8 w-8 text-sky-400 mx-auto mb-2" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 25px 50px rgba(14, 165, 233, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookTrip}
              className="group relative bg-gradient-to-r from-sky-500 via-blue-500 to-orange-500 hover:from-sky-600 hover:via-blue-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Book Your Trip</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchVideo}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-white/20 rounded-full p-1"
              >
                <Play className="h-4 w-4 fill-white" />
              </motion.div>
              Watch Video
            </motion.button>
          </motion.div>

          {/* Enhanced Floating Elements - Repositioned to avoid text overlap */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-4 md:left-8 lg:left-16 hidden lg:block"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-2xl">✈️</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 right-4 md:right-8 lg:right-16 hidden lg:block"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-pink-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-xl">🌴</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 right-1/4 hidden xl:block"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-sm">🏖️</span>
            </div>
          </motion.div>

          {/* Additional floating elements for tablets - positioned away from text */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-16 left-1/3 hidden md:block lg:hidden"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-sm">🗺️</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-28 left-1/4 hidden md:block lg:hidden"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-green-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-sm">🎒</span>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator - Fixed positioning and spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={scrollToDestinations}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden group-hover:border-white/80 transition-colors duration-300"
            >
              <motion.div
                animate={{
                  y: [0, 16, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-white/90"
              />
            </motion.div>
            
            <motion.p 
              className="text-white/60 text-xs mt-3 font-medium text-center group-hover:text-white/80 transition-colors duration-300"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideo}
                className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 border border-white/20"
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Video Iframe - Adventure/Skydiving themed video */}
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

              {/* Video Overlay Info - Updated to match adventure theme */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Ultimate Adventure Experience</h3>
                  <p className="text-gray-200 mb-4 text-sm md:text-base">
                    Feel the rush of adrenaline as you soar through the skies and experience the world from breathtaking heights. 
                    Push your limits with our extreme adventure packages designed for thrill-seekers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                      🪂 Skydiving
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                      ⚡ Extreme Sports
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                      🌤️ Sky Adventures
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                      🎯 Adrenaline Rush
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Loading indicator */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;