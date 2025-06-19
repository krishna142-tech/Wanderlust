import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Clock, Users, ArrowRight, Heart, Calendar, Zap, Sparkles } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,299',
    duration: '7 Days',
    rating: 4.9,
    reviews: 124,
    description: 'Tropical paradise with pristine beaches and rich culture',
    highlights: ['Beach Resorts', 'Temple Tours', 'Volcano Hiking'],
    badge: 'Popular',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,899',
    duration: '5 Days',
    rating: 4.8,
    reviews: 89,
    description: 'City of lights and romance with iconic landmarks',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
    badge: 'Romantic',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 3,
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$2,499',
    duration: '6 Days',
    rating: 4.9,
    reviews: 156,
    description: 'Luxury overwater bungalows in crystal clear waters',
    highlights: ['Water Villas', 'Diving', 'Spa Treatments'],
    badge: 'Luxury',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,699',
    duration: '8 Days',
    rating: 4.7,
    reviews: 201,
    description: 'Modern metropolis blending tradition with innovation',
    highlights: ['Cherry Blossoms', 'Sushi Tours', 'Tech Districts'],
    badge: 'Cultural',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,599',
    duration: '5 Days',
    rating: 4.8,
    reviews: 93,
    description: 'Stunning sunsets and white-washed cliff-top villages',
    highlights: ['Sunset Views', 'Wine Tasting', 'Volcano Tours'],
    badge: 'Scenic',
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,799',
    duration: '4 Days',
    rating: 4.6,
    reviews: 167,
    description: 'Luxury shopping and architectural marvels in the desert',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souk'],
    badge: 'Adventure',
    color: 'from-yellow-500 to-orange-600'
  }
];

const Destinations: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Advanced mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 400 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
      return () => sectionElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const handleBookNow = (destinationName: string) => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const destinationSelect = document.querySelector('select[name="destination"]') as HTMLSelectElement;
        if (destinationSelect) {
          destinationSelect.value = destinationName;
          destinationSelect.focus();
        }
      }, 1000);
    }
  };

  const handleViewDetails = (destinationName: string) => {
    alert(`🌟 ${destinationName} Details:\n\n✈️ Full itinerary available\n🏨 Premium accommodations\n🎯 Local experiences included\n📞 Contact us for detailed information!`);
  };

  const handleAddToWishlist = (destinationName: string) => {
    alert(`❤️ ${destinationName} added to your wishlist!\n\nSign up for our newsletter to get notified about special deals for this destination.`);
  };

  // Magnetic repel effect calculation
  const calculateRepelEffect = (cardIndex: number, strength: number = 30) => {
    const cardElement = document.querySelector(`[data-card="${cardIndex}"]`);
    if (!cardElement) return { x: 0, y: 0, rotate: 0 };

    const rect = cardElement.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - (cardCenterX - (sectionRef.current?.getBoundingClientRect().left || 0)), 2) + 
      Math.pow(mousePosition.y - (cardCenterY - (sectionRef.current?.getBoundingClientRect().top || 0)), 2)
    );
    
    const maxDistance = 200;
    
    if (distance < maxDistance && hoveredCard !== cardIndex) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(
        (cardCenterY - (sectionRef.current?.getBoundingClientRect().top || 0)) - mousePosition.y,
        (cardCenterX - (sectionRef.current?.getBoundingClientRect().left || 0)) - mousePosition.x
      );
      return {
        x: Math.cos(angle) * force * strength,
        y: Math.sin(angle) * force * strength,
        rotate: force * 5
      };
    }
    return { x: 0, y: 0, rotate: 0 };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateY: -45 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section ref={sectionRef} id="destinations" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0">
        {/* Morphing background shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ['50%', '30% 70% 70% 30% / 30% 30% 70% 70%', '50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            borderRadius: ['50%', '70% 30% 30% 70% / 70% 70% 30% 30%', '50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Interactive particles that follow mouse */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mouseXSpring,
              y: mouseYSpring,
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              x: { type: "spring", damping: 50, stiffness: 100 },
              y: { type: "spring", damping: 50, stiffness: 100 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/30 dark:to-orange-900/30 px-6 py-3 rounded-full mb-6 border border-sky-200/50 dark:border-sky-800/50"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-text">Handpicked Destinations</span>
            <Sparkles className="h-4 w-4 text-orange-500" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 cursor-text"
            style={{
              textShadow: '0 0 30px rgba(14, 165, 233, 0.3)',
            }}
          >
            <motion.span
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 40px rgba(14, 165, 233, 0.5)',
                transition: { duration: 0.3 }
              }}
            >
              Featured 
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                backgroundSize: '200% 200%',
                filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.4))'
              }}
              whileHover={{
                scale: 1.05,
                filter: 'drop-shadow(0 0 30px rgba(14, 165, 233, 0.6))',
                transition: { duration: 0.3 }
              }}
            >
              {' '}Destinations
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed cursor-text"
            whileHover={{
              scale: 1.02,
              color: '#374151',
              transition: { duration: 0.3 }
            }}
          >
            Discover our handpicked selection of the world's most breathtaking destinations, 
            each offering unique experiences and unforgettable memories.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => {
            const repelEffect = calculateRepelEffect(index);
            
            return (
              <motion.div
                key={destination.id}
                data-card={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  x: repelEffect.x,
                  y: repelEffect.y,
                  rotate: repelEffect.rotate,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{
                  scale: 0.95,
                  rotateY: -2,
                  rotateX: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      // Fallback image if the main image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Advanced overlay effects */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{
                      background: hoveredCard === index 
                        ? `linear-gradient(45deg, ${destination.color.split(' ')[1]}/30, transparent)`
                        : 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                    }}
                  />
                  
                  {/* Animated badge */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.span 
                      className={`bg-gradient-to-r ${destination.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-white/20`}
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(14, 165, 233, 0.3)',
                          '0 0 20px rgba(14, 165, 233, 0.6)',
                          '0 0 10px rgba(14, 165, 233, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {destination.badge}
                    </motion.span>
                  </motion.div>

                  {/* Animated price */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <motion.div 
                      className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 15px rgba(0, 0, 0, 0.5)',
                          '0 0 25px rgba(0, 0, 0, 0.7)',
                          '0 0 15px rgba(0, 0, 0, 0.5)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {destination.price}
                    </motion.div>
                  </motion.div>

                  {/* Interactive heart button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                    }}
                    whileTap={{ scale: 0.8, rotate: -10 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist(destination.name);
                    }}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-red-500/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block border border-white/30 cursor-button"
                  >
                    <Heart className="h-5 w-5 text-white" />
                  </motion.button>

                  {/* Interactive view details button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(destination.name);
                      }}
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg border border-white/50 cursor-button"
                    >
                      <Zap className="h-4 w-4" />
                      Details
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  {/* Sparkle effects on hover */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 cursor-text"
                      whileHover={{
                        scale: 1.05,
                        textShadow: '0 0 10px rgba(14, 165, 233, 0.5)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {destination.name}
                    </motion.h3>
                    <motion.div 
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-text">
                        {destination.rating}
                      </span>
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed cursor-text"
                    whileHover={{
                      color: '#374151',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {destination.description}
                  </motion.p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <motion.div 
                      className="flex items-center gap-1 cursor-text"
                      whileHover={{ scale: 1.05, color: '#6b7280' }}
                    >
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-1 cursor-text"
                      whileHover={{ scale: 1.05, color: '#6b7280' }}
                    >
                      <Users className="h-4 w-4" />
                      <span>{destination.reviews} reviews</span>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 5px 15px rgba(14, 165, 233, 0.3)',
                          transition: { duration: 0.2 }
                        }}
                        className={`bg-gradient-to-r ${destination.color}/20 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-200 dark:border-sky-800 cursor-pointer`}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 15px 35px rgba(14, 165, 233, 0.4)',
                        y: -2,
                      }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(destination.name);
                      }}
                      className={`flex-1 bg-gradient-to-r ${destination.color} hover:shadow-lg text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden cursor-button`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <Calendar className="h-4 w-4 relative z-10" />
                      <span className="relative z-10">Book Now</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    <motion.button
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                      }}
                      whileTap={{ scale: 0.9, rotate: -5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(destination.name);
                      }}
                      className="md:hidden bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-button"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95, rotateY: -5 }}
            onClick={() => alert('🌍 More destinations coming soon! Subscribe to our newsletter to be the first to know about new exotic locations.')}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-3 mx-auto relative overflow-hidden group cursor-button"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              animate={{
                textShadow: [
                  '0 0 0px rgba(14, 165, 233, 0)',
                  '0 0 10px rgba(14, 165, 233, 0.3)',
                  '0 0 0px rgba(14, 165, 233, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              View All Destinations
            </motion.span>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative z-10"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
