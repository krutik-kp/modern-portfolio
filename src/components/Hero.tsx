import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
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
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:krutik5436@gmail.com',
      color: 'hover:text-accent-green'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Greeting with Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Sparkles className="w-6 h-6 text-accent-purple" />
            <span className="text-lg text-accent-purple font-medium">Hello, I'm</span>
            <Sparkles className="w-6 h-6 text-accent-purple" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            KRUTIK PATEL
          </motion.h1>

          {/* Title with Accent */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8"
          >
            <span className="text-white">SENIOR </span>
            <span className="text-accent-purple">FULL STACK DEVELOPER</span>
            <span className="text-white"> & </span>
            <span className="text-accent-green">AI INNOVATOR</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with React, Node.js, and modern technologies, 
            enhanced by AI tools and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              className="btn-accent group flex items-center space-x-3"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <a
              className="btn-secondary group flex items-center space-x-3"
              href="/resume.pdf"
              download
            >
              <Download className="w-6 h-6" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-bg-card border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:border-accent-purple/50 ${social.color}`}
                aria-label={`Visit ${social.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <social.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce-gentle flex flex-col items-center">
              <div className="w-8 h-12 border-2 border-accent-purple rounded-full flex justify-center">
                <div className="w-1 h-4 bg-accent-purple rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-accent-purple text-sm mt-2 font-medium">Scroll Down</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;