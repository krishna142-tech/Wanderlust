import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Award, Headphones, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    number: 15000,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: Globe,
    number: 85,
    suffix: '+',
    label: 'Countries',
    description: 'Destinations covered globally',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    icon: Award,
    number: 50000,
    suffix: '+',
    label: 'Bookings',
    description: 'Successful trips organized',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    icon: Headphones,
    number: 24,
    suffix: '/7',
    label: 'Support',
    description: 'Round-the-clock assistance',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    icon: TrendingUp,
    number: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Customer satisfaction',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    icon: MapPin,
    number: 500,
    suffix: '+',
    label: 'Destinations',
    description: 'Unique locations',
    color: 'from-teal-500 to-cyan-500'
  }
];

const Counter: React.FC<{ 
  target: number; 
  duration?: number; 
  inView: boolean;
}> = ({ target, duration = 2000, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration, inView]);

  return <span>{count.toLocaleString()}</span>;
};

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const handleJoinCommunity = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // Focus on the contact form after scrolling
      setTimeout(() => {
        const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }, 1000);
    } else {
      alert('📧 Join our community by filling out the contact form below! \n\nWe\'ll keep you updated with the latest travel deals and destination guides.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="statistics" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <TrendingUp className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/90 cursor-text">Our Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cursor-text">
            Our Amazing
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
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
              {' '}Journey
            </motion.span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed cursor-text">
            Join thousands of happy travelers who have trusted us to create their perfect vacation experiences around the globe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ 
                scale: window.innerWidth > 768 ? 1.05 : 1,
                rotateY: window.innerWidth > 1024 ? 5 : 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-button"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              <motion.div
                whileHover={{ 
                  rotate: window.innerWidth > 768 ? 360 : 0,
                  scale: window.innerWidth > 768 ? 1.1 : 1
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="mb-6 relative"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-shadow duration-500`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
              </motion.div>

              <div className="mb-4 relative">
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2 cursor-text"
                  whileHover={{ scale: window.innerWidth > 768 ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Counter target={stat.number} inView={inView} />
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.suffix}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 cursor-text">
                  {stat.label}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed cursor-text">
                  {stat.description}
                </p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60%' } : {}}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto shadow-lg`}
              />

              {/* Floating particles for each card - Only on larger screens */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random(),
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: window.innerWidth > 768 ? 1.05 : 1,
              boxShadow: window.innerWidth > 768 ? '0 20px 40px rgba(59, 130, 246, 0.3)' : 'none'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleJoinCommunity}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 border border-blue-400/50 cursor-button"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
