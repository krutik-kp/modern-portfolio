import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/krutik-kp',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/krutik-patel-40a29b190/',
      color: 'hover:text-accent-blue'
    },
    // {
    //   name: 'Twitter',
    //   icon: Twitter,
    //   href: 'https://twitter.com/krutikpatel',
    //   color: 'hover:text-accent-blue'
    // },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:krutik5436@gmail.com',
      color: 'hover:text-accent-green'
    }
  ];

  const quickLinks = [
     { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

   const scrollToSection = (href: string) => {
    console.log(`Scrolling to ${href}`);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg-card text-white relative border-t border-white/10">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full shadow-2xl hover:shadow-accent-purple/25 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-bg-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Code className="w-10 h-10 text-accent-purple" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-green rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl font-bold text-gradient">Krutik Patel</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A passionate full-stack developer dedicated to creating innovative web solutions 
              and building scalable applications that make a difference.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-bg-surface text-gray-300 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:border-accent-purple/50 ${social.color}`}
                  aria-label={`Visit ${social.name}`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-accent-purple mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 cursor-pointer hover:text-accent-purple text-base px-2 py-1 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-accent-green mr-2" />
              Contact Info
            </h3>
            <div className="space-y-4 text-base text-gray-300">
              <p>Navsari, Gujarat, India</p>
              <p className="text-accent-purple">krutik5436@gmail.com</p>
              <p>+91 91064 23577</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 text-gray-400 text-base mb-4 md:mb-0">
              <span>© 2025 Krutik Patel. All rights reserved.</span>
              <span className="text-accent-purple">•</span>
              <span>Made with</span>
              <Heart className="w-5 h-5 text-accent-red animate-pulse" />
              <span>in Navsari</span>
            </div>
            
            <div className="flex items-center space-x-6 text-base text-gray-400">
              <button className="hover:text-accent-purple transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-accent-purple transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 grid-background"></div>
      </div>
    </footer>
  );
};

export default Footer;