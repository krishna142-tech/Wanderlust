import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

  const handleQuickContact = (type: 'phone' | 'email' | 'emergency') => {
    switch (type) {
      case 'phone':
        alert('📞 Calling +1 (555) 123-4567...\n\nOur travel experts are available:\nMon-Fri: 9AM-6PM\nSat: 10AM-4PM');
        break;
      case 'email':
        alert('📧 Opening your email client...\n\nSend us an email at: hello@wanderlust.com\n\nWe typically respond within 2-4 hours during business days.');
        break;
      case 'emergency':
        alert('🚨 Emergency Travel Support\n\n24/7 Hotline: +1 (555) 911-HELP\n\nFor urgent travel assistance, lost documents, or emergency situations during your trip.');
        break;
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM',
      action: () => handleQuickContact('phone')
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@wanderlust.com',
      subtitle: 'We reply within 24hrs',
      action: () => handleQuickContact('email')
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Travel Street, NYC',
      subtitle: 'Book in-person consultation',
      action: () => alert('🏢 Visit our office:\n\n📍 123 Travel Street, New York, NY 10001\n\n🕒 Office Hours:\nMon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed\n\n🚗 Free parking available')
    },
    {
      icon: Clock,
      title: '24/7 Support',
      details: 'Emergency Hotline',
      subtitle: '+1 (555) 911-HELP',
      action: () => handleQuickContact('emergency')
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Plan Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500">
              {' '}Dream Trip
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
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
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-sky-100 mb-6">
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
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-left w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-lg p-2">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{info.title}</h4>
                        <p className="text-sky-100 text-sm">{info.details}</p>
                        <p className="text-sky-200 text-xs">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Visit Our Office
              </h4>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg h-48 flex items-center justify-center cursor-pointer"
                onClick={() => alert('🗺️ Interactive map coming soon!\n\nFor now, you can find us at:\n📍 123 Travel Street, New York, NY 10001\n\n🚗 Free parking available\n🚇 Near subway stations')}
              >
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Click to view location details
                  </p>
                </div>
              </motion.div>
              <div className="mt-4 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;