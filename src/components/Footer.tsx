import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Code, ExternalLink, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Tour Packages', href: '#packages' },
      { name: 'Hotel Booking', href: '#hotels' },
      { name: 'Flight Booking', href: '#flights' },
      { name: 'Car Rental', href: '#cars' }
    ],
    destinations: [
      { name: 'Asia', href: '#asia' },
      { name: 'Europe', href: '#europe' },
      { name: 'Americas', href: '#americas' },
      { name: 'Africa', href: '#africa' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Travel Guide', href: '#guide' },
      { name: 'Booking Policy', href: '#policy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#youtube', color: 'hover:text-red-500' }
  ];

  const handlePortfolioClick = () => {
    window.open('https://krishnasevak.netlify.app/', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-8 w-8 text-sky-500" />
                <span className="text-2xl font-bold cursor-text">Wanderlust</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed cursor-text">
                Your trusted travel companion for unforgettable adventures around the world. 
                We create personalized experiences that turn your travel dreams into reality.
              </p>
            </motion.div>

            {/* Developer Info */}
            <div className="bg-gradient-to-r from-sky-900/30 to-orange-900/30 rounded-lg p-4 mb-4 border border-sky-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white cursor-text">Developed by Krishna Sevak</h4>
                  <p className="text-xs text-gray-400 cursor-text">Full Stack Developer</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePortfolioClick}
                className="w-full bg-gradient-to-r from-sky-600 to-orange-600 hover:from-sky-700 hover:to-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-button"
              >
                <Globe className="h-4 w-4" />
                View Portfolio
                <ExternalLink className="h-3 w-3" />
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-500" />
                <span className="text-sm text-gray-400 cursor-text">Contact via form above</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-sky-500" />
                <span className="text-sm text-gray-400 cursor-text">krishnasevak.netlify.app</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-text">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm cursor-button"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-text">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm cursor-button"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-text">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm cursor-button"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-text">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-sm cursor-button"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-sky-500/10 to-orange-500/10 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 cursor-text">Stay Updated</h3>
            <p className="text-gray-400 mb-6 cursor-text">
              Subscribe to our newsletter and get the latest travel deals and destination guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sky-500 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-button"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm cursor-text"
            >
              © 2024 Wanderlust Travel Agency. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 cursor-button`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 text-sm"
            >
              <a href="#privacy" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 cursor-button">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 cursor-button">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;