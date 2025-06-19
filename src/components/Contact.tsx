import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, ExternalLink, Code, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', destination: '', message: '' });
      
      // Show success message
      setTimeout(() => {
        alert(`🎉 Thank you ${formData.name}! Your booking inquiry has been received.\n\n📧 We'll contact you within 24 hours with a personalized itinerary for ${formData.destination || 'your chosen destination'}.\n\n✈️ Get ready for an amazing adventure!`);
      }, 500);
      
    } catch (error) {
      setSubmitStatus('error');
      alert('❌ Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePortfolioVisit = () => {
    window.open('https://krishnasevak.netlify.app/', '_blank');
  };

  const handleDeveloperContact = () => {
    alert('👨‍💻 Developer Contact\n\n🌐 Portfolio: https://krishnasevak.netlify.app/\n\n📧 For technical inquiries or collaboration opportunities, please visit the portfolio website.\n\n🚀 Specialized in modern web development with React, TypeScript, and advanced animations.');
  };

  const contactInfo = [
    {
      icon: Globe,
      title: 'Developer Portfolio',
      details: 'krishnasevak.netlify.app',
      subtitle: 'View projects & skills',
      action: handlePortfolioVisit,
      isExternal: true
    },
    {
      icon: Code,
      title: 'Technical Support',
      details: 'Web Development',
      subtitle: 'React • TypeScript • Animations',
      action: handleDeveloperContact,
      isExternal: false
    },
    {
      icon: Mail,
      title: 'Get In Touch',
      details: 'Contact Form',
      subtitle: 'Send us your travel plans',
      action: () => alert('📧 Please use the contact form below to send us your travel inquiries and we\'ll get back to you soon!'),
      isExternal: false
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 Hours',
      subtitle: 'Quick response guaranteed',
      action: () => alert('⏰ Response Time\n\n📞 We typically respond to all inquiries within 24 hours during business days.\n\n🌍 For urgent travel assistance, please mention "URGENT" in your message subject.'),
      isExternal: false
    }
  ];

  const destinations = [
    'Bali, Indonesia',
    'Paris, France',
    'Maldives',
    'Tokyo, Japan',
    'Santorini, Greece',
    'Dubai, UAE',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 cursor-text">
            Let's Plan Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500">
              {' '}Dream Trip
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto cursor-text">
            Ready to embark on your next adventure? Get in touch with our travel experts 
            and let us create a personalized itinerary just for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 cursor-text">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-text">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-text">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-text">
                  Preferred Destination *
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-text">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your dream trip, travel dates, budget, and any special requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-button ${
                  submitStatus === 'success' 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gradient-to-r from-sky-500 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  </motion.div>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent Successfully!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-sky-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 cursor-text">Get in Touch</h3>
              <p className="text-sky-100 mb-6 cursor-text">
                Our travel experts are here to help you plan the perfect getaway. 
                Reach out to us through any of these channels.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={info.action}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-left w-full cursor-button"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-lg p-2">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">{info.title}</h4>
                          {info.isExternal && (
                            <ExternalLink className="h-3 w-3 text-sky-200" />
                          )}
                        </div>
                        <p className="text-sky-100 text-sm">{info.details}</p>
                        <p className="text-sky-200 text-xs">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Developer Info Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 cursor-text">
                About the Developer
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white cursor-text">Krishna Sevak</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 cursor-text">Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed cursor-text">
                  Specialized in creating modern, interactive web applications with advanced animations 
                  and smooth user experiences using React, TypeScript, and cutting-edge web technologies.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 5px 15px rgba(14, 165, 233, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                      className="bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-200 dark:border-sky-800 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePortfolioVisit}
                  className="w-full bg-gradient-to-r from-sky-500 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-button"
                >
                  <Globe className="h-4 w-4" />
                  Visit Portfolio
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 cursor-text">
                🚀 Project Features
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2 cursor-text">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  Advanced animations with Framer Motion
                </li>
                <li className="flex items-center gap-2 cursor-text">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Interactive cursor effects & visual feedback
                </li>
                <li className="flex items-center gap-2 cursor-text">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Responsive design with dark mode support
                </li>
                <li className="flex items-center gap-2 cursor-text">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Modern TypeScript & React architecture
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;