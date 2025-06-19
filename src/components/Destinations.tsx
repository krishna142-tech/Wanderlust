import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Clock, Users, ArrowRight, Heart, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';
import RippleEffect from './RippleEffect';
import ScrollTriggeredAnimations from './ScrollTriggeredAnimations';

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2374194/pexels-photo-2374194.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$1,299',
    duration: '7 Days',
    rating: 4.9,
    reviews: 124,
    description: 'Tropical paradise with pristine beaches and rich culture',
    highlights: ['Beach Resorts', 'Temple Tours', 'Volcano Hiking'],
    badge: 'Popular'
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
    badge: 'Romantic'
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
    badge: 'Luxury'
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
    badge: 'Cultural'
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
    badge: 'Scenic'
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
    badge: 'Adventure'
  }
];

const Destinations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Advanced staggered card animations
      gsap.fromTo('.destination-card', {
        y: 100,
        opacity: 0,
        rotationX: 45,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.destinations-grid',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating animation for cards
      gsap.to('.destination-card', {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: '.destinations-grid',
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause resume pause"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <section ref={sectionRef} id="destinations" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Advanced Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollTriggeredAnimations animationType="fadeUp" className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/30 dark:to-orange-900/30 px-6 py-3 rounded-full mb-6 border border-sky-200 dark:border-sky-800"
          >
            <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Handpicked Destinations</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Featured 
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
              style={{ backgroundSize: '200% 200%' }}
            >
              {' '}Destinations
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover our handpicked selection of the world's most breathtaking destinations, 
            each offering unique experiences and unforgettable memories.
          </motion.p>
        </ScrollTriggeredAnimations>

        <div className="destinations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="destination-card group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800 relative"
              whileHover={{ 
                y: -20,
                rotateY: window.innerWidth > 768 ? 5 : 0,
                scale: window.innerWidth > 768 ? 1.02 : 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            >
              {/* Advanced Image Container */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: window.innerWidth > 768 ? 1.15 : 1.05,
                    rotate: window.innerWidth > 768 ? 2 : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Advanced Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Animated Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {destination.badge}
                  </span>
                </motion.div>

                {/* Advanced Price Tag */}
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(14, 165, 233, 0.3)",
                      "0 8px 25px rgba(14, 165, 233, 0.5)",
                      "0 4px 15px rgba(14, 165, 233, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {destination.price}
                </motion.div>

                {/* Advanced Wishlist Button */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <RippleEffect>
                    <MagneticButton
                      onClick={() => handleAddToWishlist(destination.name)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full border border-white/30"
                      strength={0.2}
                    >
                      <Heart className="h-5 w-5 text-white" />
                    </MagneticButton>
                  </RippleEffect>
                </motion.div>

                {/* Advanced Details Button */}
                <motion.div
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <MagneticButton
                    onClick={() => handleViewDetails(destination.name)}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
                    strength={0.3}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Advanced Card Content */}
              <div className="p-6 relative">
                {/* Floating Rating */}
                <motion.div 
                  className="absolute -top-6 right-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {destination.rating}
                    </span>
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {destination.name}
                </motion.h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{destination.reviews} reviews</span>
                  </div>
                </div>

                {/* Advanced Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-200 dark:border-sky-800"
                      whileHover={{ 
                        scale: window.innerWidth > 768 ? 1.1 : 1,
                        backgroundColor: "rgba(14, 165, 233, 0.1)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(14, 165, 233, 0)",
                          "0 0 10px rgba(14, 165, 233, 0.3)",
                          "0 0 0 rgba(14, 165, 233, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: idx * 0.5
                      }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>

                {/* Advanced Action Buttons */}
                <div className="flex gap-3">
                  <RippleEffect className="flex-1">
                    <MagneticButton
                      onClick={() => handleBookNow(destination.name)}
                      className="w-full bg-gradient-to-r from-sky-500 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                      strength={0.2}
                    >
                      <Calendar className="h-4 w-4" />
                      Book Now
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </MagneticButton>
                  </RippleEffect>

                  {/* Mobile Details Button */}
                  <MagneticButton
                    onClick={() => handleViewDetails(destination.name)}
                    className="md:hidden bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    strength={0.2}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Advanced Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(249, 115, 22, 0.1))",
                  filter: "blur(20px)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Advanced View All Button */}
        <ScrollTriggeredAnimations animationType="scale" className="text-center mt-16">
          <RippleEffect>
            <MagneticButton
              onClick={() => alert('🌍 More destinations coming soon! Subscribe to our newsletter to be the first to know about new exotic locations.')}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 flex items-center gap-3 mx-auto group"
              strength={0.3}
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                View All Destinations
              </motion.span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
          </RippleEffect>
        </ScrollTriggeredAnimations>
      </div>
    </section>
  );
};

export default Destinations;