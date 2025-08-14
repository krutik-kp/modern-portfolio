import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles, MessageCircle, Zap, Globe, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'krutik5436@gmail.com',
      link: 'mailto:krutik5436@gmail.com',
      color: 'text-accent-red',
      bgColor: 'bg-accent-red/20',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 91064 23577',
      link: 'tel:+919106423577',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/20',
      description: 'Let\'s have a conversation'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Navsari, Gujarat, India',
      link: '#',
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/20',
      description: 'Based in the heart of tech'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/krutikpatel',
      color: 'hover:text-gray-300',
      bgColor: 'bg-bg-card',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/krutikpatel',
      color: 'hover:text-accent-blue',
      bgColor: 'bg-bg-card',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/krutikpatel',
      color: 'hover:text-accent-blue',
      bgColor: 'bg-bg-card',
      description: 'Follow my journey'
    }
  ];

  // const availabilityStatus = {
  //   status: 'Available for new opportunities',
  //   description: 'I\'m currently accepting new projects and would love to hear from you.',
  //   nextAvailable: 'Next available: September 2024',
  //   responseTime: 'Response time: Within 24 hours'
  // };

  return (
    <section id="contact" className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header with Storytelling Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <Sparkles className="w-8 h-8 text-accent-purple" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Let's Connect
            </h2>
            <Sparkles className="w-8 h-8 text-accent-purple" />
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '8rem' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together to create something amazing!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 bg-bg-card rounded-2xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`p-4 rounded-2xl ${info.bgColor} ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon className="w-7 h-7" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-lg mb-2">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-accent-purple transition-colors duration-200 text-base block mb-2"
                        >
                          {info.value}
                        </a>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            {/* <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 text-accent-purple mr-2" />
                Follow My Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl ${social.bgColor} text-gray-300 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:border-accent-purple/50 ${social.color}`}
                    aria-label={`Visit ${social.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, rotate: 5 }}
                  >
                    <social.icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </div> */}

            {/* Enhanced Availability Status */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-accent-green/10 border border-accent-green/30 rounded-2xl p-6 relative overflow-hidden"
            > */}
              {/* Animated Background */}
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-green/5 to-accent-blue/5"
                animate={{ x: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              /> */}
              
              {/* <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div 
                    className="w-4 h-4 bg-accent-green rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-accent-green font-bold text-lg">{availabilityStatus.status}</span>
                </div>
                <p className="text-accent-green/80 text-base mb-4">{availabilityStatus.description}</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="text-accent-green/70 flex items-center space-x-2">
                    <span className="font-semibold">📅</span>
                    <span>{availabilityStatus.nextAvailable}</span>
                  </div>
                  <div className="text-accent-green/70 flex items-center space-x-2">
                    <span className="font-semibold">⚡</span>
                    <span>{availabilityStatus.responseTime}</span>
                  </div>
                </div>
              </div> */}
            {/* </motion.div> */}
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-bg-card rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Form Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 grid-background"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MessageCircle className="w-8 h-8 text-accent-purple" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">
                  Send Me a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Name *
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-5 py-4 border border-white/10 rounded-xl bg-bg-surface text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full"
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email *
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-5 py-4 border border-white/10 rounded-xl bg-bg-surface text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full"
                        />
                      )}
                    </motion.div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject *
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 border border-white/10 rounded-xl bg-bg-surface text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                    {focusedField === 'subject' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full"
                      />
                    )}
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Message *
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border border-white/10 rounded-xl bg-bg-surface text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me more about your project or inquiry..."
                    ></textarea>
                    {focusedField === 'message' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full"
                      />
                    )}
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-accent flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                      <Zap className="w-5 h-5 text-accent-yellow" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 