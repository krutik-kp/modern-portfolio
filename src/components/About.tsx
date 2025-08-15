import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Briefcase, Sparkles, Award, BookOpen, Lightbulb, Users, Zap } from 'lucide-react';

// Custom Illustrated Character Component
const IllustratedCharacter: React.FC = () => {
  return (
    <motion.div
      className="relative w-80 h-80 mx-auto lg:mx-0"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Main Character Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-accent-blue/20 to-accent-green/20 rounded-3xl p-2 animate-glow">
        <div className="w-full h-full bg-bg-card rounded-3xl flex items-center justify-center relative overflow-hidden">
          {/* Character Head */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-300 rounded-full relative shadow-lg">
              {/* Eyes */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full shadow-inner"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full shadow-inner"></div>
              <div className="absolute top-9 left-9 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-9 right-9 w-2 h-2 bg-black rounded-full"></div>
              {/* Glasses Frame */}
              <div className="absolute top-7 left-6 w-16 h-8 border-2 border-accent-blue rounded-full opacity-60"></div>
              {/* Smile */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-2 border-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Character Body */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
            <div className="w-36 h-44 bg-gradient-to-br from-accent-purple via-accent-blue to-accent-green rounded-2xl relative shadow-lg">
              {/* Code Symbols on Body */}
              <div className="absolute top-3 left-3 text-white text-xs font-mono font-bold">&lt;/&gt;</div>
              <div className="absolute top-3 right-3 text-white text-xs font-mono font-bold">{}</div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono font-bold">React</div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono font-bold">Node.js</div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono font-bold">TypeScript</div>
              
              {/* Decorative Lines */}
              <div className="absolute top-12 left-2 right-2 h-0.5 bg-white/30 rounded-full"></div>
              <div className="absolute top-24 left-2 right-2 h-0.5 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Character Arms */}
          <div className="absolute top-36 left-6 w-7 h-20 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full transform -rotate-12 shadow-lg"></div>
          <div className="absolute top-36 right-6 w-7 h-20 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full transform rotate-12 shadow-lg"></div>

          {/* Character Legs */}
          <div className="absolute bottom-6 left-20 w-10 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full shadow-lg"></div>
          <div className="absolute bottom-6 right-20 w-10 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full shadow-lg"></div>

          {/* Floating Elements Around Character */}
          <motion.div
            className="absolute top-2 left-2 w-5 h-5 bg-accent-green rounded-full shadow-lg"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute top-2 right-2 w-4 h-4 bg-accent-yellow rounded-full shadow-lg"
            animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-2 left-2 w-6 h-6 bg-accent-orange rounded-full shadow-lg"
            animate={{ y: [0, -18, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-2 right-2 w-4 h-4 bg-accent-pink rounded-full shadow-lg"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          ></motion.div>

          {/* Additional Tech Icons */}
          <motion.div
            className="absolute top-16 left-2 w-8 h-8 bg-accent-blue/80 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            DB
          </motion.div>
          <motion.div
            className="absolute top-16 right-2 w-8 h-8 bg-accent-green/80 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            API
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-green to-accent-blue rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl border-4 border-bg-primary"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        CS
      </motion.div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-green/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Navsari, Gujarat, India', color: 'text-accent-blue' },
    { icon: Calendar, label: 'Birth Date', value: 'July 12, 1999', color: 'text-accent-green' },
    { icon: GraduationCap, label: 'Education', value: 'Bachelor of Computer Science', color: 'text-accent-purple' },
    { icon: Briefcase, label: 'Experience', value: '3.5+ Years', color: 'text-accent-orange' },
  ];

  const personalityKeywords = [
    { word: 'Innovative', icon: Lightbulb, color: 'text-accent-yellow' },
    { word: 'Collaborative', icon: Users, color: 'text-accent-green' },
    { word: 'Problem Solver', icon: Zap, color: 'text-accent-blue' },
    { word: 'Lifelong Learner', icon: BookOpen, color: 'text-accent-purple' },
    { word: 'Detail-Oriented', icon: Award, color: 'text-accent-orange' },
  ];

  // const universityHighlights = [
  //   {
  //     title: 'University of Toronto',
  //     subtitle: 'Bachelor of Computer Science',
  //     period: '2016 - 2020',
  //     gpa: '3.9/4.0',
  //     achievements: [
  //       'Dean\'s List (4 years consecutively)',
  //       'Computer Science Society President (2019-2020)',
  //       'Capstone Project: AI Web Assistant (Grade: A+)',
  //       'Research Assistant in Machine Learning Lab',
  //       'Scholarship recipient for academic excellence'
  //     ]
  //   }
  // ];

  return (
    <section id="about" className="section-padding bg-bg-secondary relative overflow-hidden">
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
              My Story
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
            From university halls to tech innovation - here's the journey that shaped me into the developer I am today
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Illustrated Character and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Custom Illustrated Character */}
            <IllustratedCharacter />

            {/* Personal Information Cards */}
            <div className="space-y-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-6 bg-bg-card rounded-2xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`p-3 rounded-xl bg-bg-surface ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">{info.label}:</span>
                    <span className="text-white ml-2">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Storytelling Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                The <span className="text-gradient">Beginning</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  My journey began at the Birla Vishwakarma Mahavidhyalaya, where I discovered my passion for creating innovative digital solutions. 
                  What started as curiosity about how things work on the web evolved into a deep love for building applications that make a difference.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  With expertise in both frontend and backend technologies, I enjoy the challenge of creating 
                  seamless user experiences while ensuring robust, scalable backend systems.
                </motion.p>
              </div>
            </motion.div>

            {/* Personality Keywords with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                What Defines Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {personalityKeywords.map((keyword, index) => (
                  <motion.div
                    key={keyword.word}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-4 py-3 bg-bg-card text-accent-purple rounded-xl border border-accent-purple/30 hover:border-accent-purple/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/20"
                  >
                    <keyword.icon className={`w-5 h-5 ${keyword.color}`} />
                    <span className="font-medium">{keyword.word}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* University Highlights with Animated Blocks */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Academic Excellence
              </h4>
              {universityHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-card rounded-2xl p-6 border border-white/10 hover:border-accent-purple/30 transition-all duration-300 hover:shadow-xl mb-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold text-white">{highlight.title}</h5>
                    <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-bold">
                      GPA: {highlight.gpa}
                    </span>
                  </div>
                  <p className="text-accent-purple font-semibold mb-3">{highlight.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-4">{highlight.period}</p>
                  <ul className="space-y-2">
                    {highlight.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.7 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 flex items-start space-x-2"
                      >
                        <span className="text-accent-green mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 