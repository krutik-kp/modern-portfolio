import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Eye, Code, Globe, Database, ExternalLink, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'JWT'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/krutikpatel/ecommerce',
      featured: true,
      achievements: ['40% faster load times', '99.9% uptime', '500+ daily users'],
      difficulty: 'Advanced',
      duration: '4 months',
      teamSize: '5 developers',
      impact: 'High'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, team collaboration features, and AI-powered task prioritization.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'AI Integration'],
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/krutikpatel/task-app',
      featured: true,
      achievements: ['Real-time collaboration', 'AI task prioritization', 'Mobile responsive'],
      difficulty: 'Intermediate',
      duration: '3 months',
      teamSize: '3 developers',
      impact: 'Medium'
    },
    {
      id: 3,
      title: 'REST API Service',
      description: 'A scalable REST API service built with Node.js, Express, and PostgreSQL. Includes authentication, rate limiting, data validation, comprehensive testing, and automated deployment.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Jest', 'Docker', 'AWS'],
      liveUrl: 'https://api-demo.com',
      githubUrl: 'https://github.com/krutikpatel/rest-api',
      featured: false,
      achievements: ['99.9% uptime', '10k+ requests/min', 'Auto-scaling'],
      difficulty: 'Advanced',
      duration: '2 months',
      teamSize: '2 developers',
      impact: 'High'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, optimized performance, and SEO best practices.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      liveUrl: 'https://krutikportfolio.netlify.app',
      githubUrl: 'https://github.com/krutikpatel/portfolio',
      featured: true,
      achievements: ['100% Lighthouse score', 'Dark theme', 'Smooth animations'],
      difficulty: 'Intermediate',
      duration: '1 month',
      teamSize: '1 developer',
      impact: 'Medium'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather dashboard application that displays current and forecasted weather data. Built with React and integrates with multiple weather APIs, featuring interactive charts and maps.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS', 'Leaflet Maps'],
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/krutikpatel/weather-app',
      featured: false,
      achievements: ['Real-time updates', 'Interactive charts', 'Location-based'],
      difficulty: 'Intermediate',
      duration: '2 months',
      teamSize: '2 developers',
      impact: 'Medium'
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'A microservices-based application demonstrating distributed system design. Includes service discovery, load balancing, container orchestration, and monitoring.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis', 'MongoDB', 'Prometheus'],
      liveUrl: 'https://microservices-demo.com',
      githubUrl: 'https://github.com/krutikpatel/microservices',
      featured: false,
      achievements: ['Auto-scaling', 'Service mesh', 'Monitoring'],
      difficulty: 'Advanced',
      duration: '6 months',
      teamSize: '8 developers',
      impact: 'Very High'
    },
    {
      id: 7,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by OpenAI GPT models. Features real-time messaging, conversation history, and AI-powered responses with context awareness.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB', 'Redis'],
      liveUrl: 'https://ai-chat-demo.com',
      githubUrl: 'https://github.com/krutikpatel/ai-chat',
      featured: true,
      achievements: ['AI-powered responses', 'Real-time chat', 'Context awareness'],
      difficulty: 'Advanced',
      duration: '5 months',
      teamSize: '4 developers',
      impact: 'High'
    },
    {
      id: 8,
      title: 'Data Analytics Dashboard',
      description: 'A comprehensive data analytics dashboard with real-time data visualization, interactive charts, and customizable reports. Built for business intelligence and data insights.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'D3.js', 'WebSocket'],
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/krutikpatel/analytics-dashboard',
      featured: false,
      achievements: ['Real-time data', 'Interactive charts', 'Custom reports'],
      difficulty: 'Advanced',
      duration: '4 months',
      teamSize: '6 developers',
      impact: 'High'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Star },
    { key: 'frontend', label: 'Frontend', icon: Code },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'fullstack', label: 'Full Stack', icon: Globe }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="w-5 h-5" />;
      case 'backend':
        return <Database className="w-5 h-5" />;
      case 'fullstack':
        return <Globe className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced':
        return 'text-accent-red';
      case 'Intermediate':
        return 'text-accent-yellow';
      default:
        return 'text-accent-green';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High':
        return 'text-accent-purple';
      case 'High':
        return 'text-accent-blue';
      case 'Medium':
        return 'text-accent-green';
      default:
        return 'text-accent-orange';
    }
  };

  return (
    <section id="projects" className="section-padding bg-bg-secondary relative overflow-hidden">
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
              My Creations
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
            A showcase of innovative solutions that demonstrate my passion for creating impactful digital experiences
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-2xl shadow-accent-purple/25'
                  : 'bg-bg-card text-gray-300 hover:text-white border border-white/10 hover:border-accent-purple/50'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <motion.div
                  className="bg-bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/10 hover:border-accent-purple/30"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image with Enhanced Hover Effects */}
                  <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center overflow-hidden">
                    <motion.div 
                      className="text-6xl text-accent-purple/40 group-hover:scale-110 transition-transform duration-500"
                      animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      💻
                    </motion.div>
                    
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-4 right-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                      >
                        Featured
                      </motion.div>
                    )}
                    
                    {/* Project Stats Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-bg-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    >
                      <div className="grid grid-cols-2 gap-2 w-full text-xs">
                        <div className="bg-bg-surface/80 rounded-lg p-2 text-center">
                          <span className="text-accent-purple font-bold">{project.difficulty}</span>
                        </div>
                        <div className="bg-bg-surface/80 rounded-lg p-2 text-center">
                          <span className="text-accent-green font-bold">{project.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content with Enhanced Details */}
                  <div className="p-8">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(project.category)}
                        <span className="text-sm font-semibold text-accent-purple capitalize">
                          {project.category}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full bg-bg-surface ${getImpactColor(project.impact)}`}>
                        {project.impact} Impact
                      </span>
                    </div>

                    {/* Title with Hover Effect */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies with Enhanced Styling */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-bg-surface text-gray-300 text-xs rounded-lg border border-white/10 hover:border-accent-purple/50 transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced Achievements */}
                    {project.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-accent-green mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="text-xs text-gray-400 flex items-start space-x-2"
                            >
                              <span className="text-accent-green mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-3 mb-6 text-xs">
                      <div className="text-center p-2 bg-bg-surface rounded-lg">
                        <div className="text-accent-purple font-bold">{project.difficulty}</div>
                        <div className="text-gray-400">Complexity</div>
                      </div>
                      <div className="text-center p-2 bg-bg-surface rounded-lg">
                        <div className="text-accent-blue font-bold">{project.duration}</div>
                        <div className="text-gray-400">Timeline</div>
                      </div>
                      <div className="text-center p-2 bg-bg-surface rounded-lg">
                        <div className="text-accent-green font-bold">{project.teamSize}</div>
                        <div className="text-gray-400">Team</div>
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    {/* <div className="flex space-x-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white py-3 px-4 rounded-xl hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center space-x-2 bg-bg-surface text-gray-300 py-3 px-4 rounded-xl hover:bg-bg-primary hover:text-white transition-all duration-200 text-sm font-semibold border border-white/10 hover:border-accent-purple/50"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div> */}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/krutikpatel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent inline-flex items-center space-x-3"
          >
            <Github className="w-6 h-6" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 