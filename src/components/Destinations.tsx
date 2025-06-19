import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Clock, Users, ArrowRight, Heart, Calendar } from 'lucide-react';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Optimized Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl animate-pulse-glow-optimized"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float-optimized"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full mb-4"
          >
            <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Handpicked Destinations</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500 text-gradient-optimized">
              {' '}Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of the world's most breathtaking destinations, 
            each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 card-3d-optimized hover-lift-optimized"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {destination.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-glow-optimized">
                  {destination.price}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAddToWishlist(destination.name)}
                  className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
                >
                  <Heart className="h-4 w-4 text-white" />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(destination.name)}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg btn-optimized"
                  >
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {destination.rating}
                    </span>
                  </div>
                </div>

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

                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-200 dark:border-sky-800"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookNow(destination.name)}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn btn-optimized"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Now
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(destination.name)}
                    className="md:hidden bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('🌍 More destinations coming soon! Subscribe to our newsletter to be the first to know about new exotic locations.')}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-2 mx-auto btn-optimized"
          >
            View All Destinations
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;