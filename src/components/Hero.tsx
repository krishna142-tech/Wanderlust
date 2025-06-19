import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, X, Zap, Star, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
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

  // Magnetic effect calculation for floating elements
  const calculateMagneticEffect = (elementX: number, elementY: number, strength: number = 50) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - elementX, 2) + Math.pow(mousePosition.y - elementY, 2)
    );
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(mousePosition.y - elementY, mousePosition.x - elementX);
      return {
        x: Math.cos(angle) * force * strength,
        y: Math.sin(angle) * force * strength,
        scale: 1 + force * 0.1
      };
    }
    return { x: 0, y: 0, scale: 1 };
  };

  return (
    <>
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Interactive Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            y,
            x: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]),
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"
            style={{ opacity }}
          />
        </motion.div>

        {/* Advanced Interactive Particle System */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => {
            const baseX = Math.random() * 100;
            const baseY = Math.random() * 100;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 3,
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              />
            );
          })}
        </div>

        {/* Hero Content with Advanced Interactions */}
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-6"
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Sparkles className="h-12 w-12 text-sky-400 mx-auto mb-4" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Zap className="h-8 w-8 text-orange-400 opacity-70" />
            </motion.div>
          </motion.div>

          {/* Advanced Text with Magnetic Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight cursor-text"
            style={{
              textShadow: '0 0 30px rgba(14, 165, 233, 0.5)',
            }}
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                textShadow: '0 0 50px rgba(14, 165, 233, 0.8)',
                transition: { duration: 0.3 }
              }}
            >
              Explore The
            </motion.span>
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
              style={{ 
                backgroundSize: '200% 200%',
                filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))'
              }}
              whileHover={{
                scale: 1.1,
                filter: 'drop-shadow(0 0 40px rgba(14, 165, 233, 0.8))',
                transition: { duration: 0.3 }
              }}
            >
              {' '}World
            </motion.span>
          </motion.h1>

          {/* Interactive Description */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed cursor-text"
            whileHover={{
              scale: 1.05,
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              transition: { duration: 0.3 }
            }}
          >
            Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will last a lifetime.
          </motion.p>

          {/* Advanced Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)",
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ 
                scale: 0.95,
                rotateY: -5,
                rotateX: -5,
              }}
              onClick={handleBookTrip}
              className="group relative bg-gradient-to-r from-sky-500 via-blue-500 to-orange-500 hover:from-sky-600 hover:via-blue-600 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 shadow-2xl overflow-hidden cursor-button"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.span 
                className="relative z-10"
                animate={{
                  textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.5)', '0 0 0px rgba(255,255,255,0)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Book Your Adventure
              </motion.span>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <ArrowRight className="h-6 w-6 relative z-10" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                rotateY: -5,
                rotateX: 5,
              }}
              whileTap={{ 
                scale: 0.95,
                rotateY: 5,
                rotateX: -5,
              }}
              onClick={handleWatchVideo}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/40 cursor-button"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 rounded-full p-2"
              >
                <Play className="h-5 w-5 fill-white" />
              </motion.div>
              <motion.span
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Experience Video
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Advanced Floating Elements with Magnetic Repel Effect */}
        <motion.div
          className="absolute top-20 left-4 md:left-8 lg:left-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 50, rotateY: -180 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          style={{
            x: calculateMagneticEffect(100, 100, -80).x,
            y: calculateMagneticEffect(100, 100, -80).y,
            scale: calculateMagneticEffect(100, 100, -80).scale,
          }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-sky-400/30 to-blue-500/30 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, 0],
              boxShadow: [
                '0 10px 30px rgba(14, 165, 233, 0.3)',
                '0 20px 60px rgba(14, 165, 233, 0.5)',
                '0 10px 30px rgba(14, 165, 233, 0.3)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 20,
              boxShadow: '0 30px 80px rgba(14, 165, 233, 0.6)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.span 
              className="text-3xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✈️
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-4 md:right-8 lg:right-16 hidden lg:block z-30"
          initial={{ opacity: 0, y: 50, rotateY: 180 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          style={{
            x: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth - 100 : 1820, typeof window !== 'undefined' ? window.innerHeight - 200 : 880, -60).x,
            y: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth - 100 : 1820, typeof window !== 'undefined' ? window.innerHeight - 200 : 880, -60).y,
            scale: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth - 100 : 1820, typeof window !== 'undefined' ? window.innerHeight - 200 : 880, -60).scale,
          }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-orange-400/30 to-pink-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -10, 0],
              borderRadius: ['16px', '50%', '16px'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.4, 
              rotate: -20,
              borderRadius: '50%',
              transition: { duration: 0.3 }
            }}
          >
            <motion.span 
              className="text-2xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🌴
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Additional Interactive Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 hidden xl:block z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          style={{
            x: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth * 0.75 : 1440, typeof window !== 'undefined' ? window.innerHeight * 0.33 : 360, -40).x,
            y: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth * 0.75 : 1440, typeof window !== 'undefined' ? window.innerHeight * 0.33 : 360, -40).y,
          }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ 
              scale: 1.5,
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)',
              transition: { duration: 0.2 }
            }}
          >
            <Star className="h-6 w-6 text-white fill-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 hidden xl:block z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
          style={{
            x: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth * 0.25 : 480, typeof window !== 'undefined' ? window.innerHeight * 0.67 : 720, -40).x,
            y: calculateMagneticEffect(typeof window !== 'undefined' ? window.innerWidth * 0.25 : 480, typeof window !== 'undefined' ? window.innerHeight * 0.67 : 720, -40).y,
          }}
        >
          <motion.div 
            className="w-14 h-14 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-xl"
            animate={{
              y: [0, -15, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.4,
              rotateY: 180,
              transition: { duration: 0.3 }
            }}
          >
            <Globe className="h-7 w-7 text-white" />
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator - Fixed Responsive Alignment */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
          onClick={scrollToDestinations}
        >
          <motion.div className="flex flex-col items-center">
            <motion.div
              className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden group-hover:border-white/90 transition-colors duration-300"
              animate={{
                y: [0, 15, 0],
                boxShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.3)',
                  '0 0 25px rgba(255, 255, 255, 0.6)',
                  '0 0 10px rgba(255, 255, 255, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
                transition: { duration: 0.3 }
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
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-white/70 text-sm mt-4 font-medium text-center group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap px-4"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                y: [0, -2, 0],
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

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideo}
                className="absolute top-6 right-6 z-20 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 cursor-button"
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
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 z-10"
              >
                <div className="text-white">
                  <motion.h3 
                    className="text-2xl md:text-4xl font-bold mb-3"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(14, 165, 233, 0.5)',
                        '0 0 20px rgba(14, 165, 233, 0.8)',
                        '0 0 10px rgba(14, 165, 233, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Ultimate Adventure Experience
                  </motion.h3>
                  <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed">
                    Feel the rush of adrenaline as you soar through the skies and experience the world from breathtaking heights.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['🪂 Skydiving', '⚡ Extreme Sports', '🌤️ Sky Adventures', '🎯 Adrenaline Rush'].map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
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