import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Cpu, Globe, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-accent-blue to-cyan-500',
      bgColor: 'bg-accent-blue/20',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-accent-green to-emerald-500',
      bgColor: 'bg-accent-green/20',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 88 },
        { name: 'Microservices', level: 85 },
        { name: 'Serverless', level: 80 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Cloud,
      color: 'from-accent-purple to-pink-500',
      bgColor: 'bg-accent-purple/20',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'AWS', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Azure', level: 75 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-accent-orange to-red-500',
      bgColor: 'bg-accent-orange/20',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'User Research', level: 80 },
        { name: 'Prototyping', level: 88 },
        { name: 'Design Systems', level: 85 },
        { name: 'Accessibility', level: 90 },
        { name: 'Mobile First', level: 92 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cpu,
      color: 'from-accent-blue to-indigo-500',
      bgColor: 'bg-accent-blue/20',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'CI/CD', level: 88 },
        { name: 'Linux', level: 90 },
        { name: 'Nginx', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'Monitoring', level: 85 },
        { name: 'Testing', level: 88 },
        { name: 'Performance', level: 85 },
      ]
    },
    {
      title: 'Other Technologies',
      icon: Globe,
      color: 'from-accent-green to-teal-500',
      bgColor: 'bg-accent-green/20',
      skills: [
        { name: 'GraphQL', level: 88 },
        { name: 'WebSockets', level: 85 },
        { name: 'JWT', level: 90 },
        { name: 'OAuth', level: 85 },
        { name: 'Testing', level: 88 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Machine Learning', level: 75 },
        { name: 'Blockchain', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-accent-purple" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills & Expertise
            </h2>
            <Sparkles className="w-8 h-8 text-accent-purple" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-card rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/10 hover:border-accent-purple/30 group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-accent-purple">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-bg-surface rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills with Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Additional Skills & Tools
          </h3>
          
          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            {/* First Row - Moving Left */}
            <motion.div
              className="flex space-x-4 mb-6"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[
                'React Query', 'Socket.io', 'Jest', 'Cypress', 'Storybook', 'Webpack', 'Vite', 'Postman', 
                'Insomnia', 'VS Code', 'IntelliJ IDEA', 'Swagger', 'OpenAPI', 'Elasticsearch', 'Kafka',
                'RabbitMQ', 'MongoDB Atlas', 'AWS Lambda', 'S3', 'EC2', 'RDS', 'CloudFront', 'Route 53',
                'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Jira', 'Confluence',
                'React Query', 'Socket.io', 'Jest', 'Cypress', 'Storybook', 'Webpack', 'Vite', 'Postman'
              ].map((skill, index) => (
                <div
                  key={`left-${index}`}
                  className="px-6 py-3 bg-bg-card text-gray-300 rounded-2xl text-sm font-medium shadow-lg border border-white/10 whitespace-nowrap flex-shrink-0 hover:border-accent-purple/50 hover:text-accent-purple transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>

            {/* Second Row - Moving Right */}
            <motion.div
              className="flex space-x-4 mb-6"
              animate={{ x: [-1000, 0] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[
                'Docker Compose', 'Kubernetes', 'Helm Charts', 'ArgoCD', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'SonarQube',
                'Sentry', 'LogRocket', 'Mixpanel', 'Google Analytics', 'Hotjar', 'Optimizely', 'A/B Testing',
                'Performance Monitoring', 'Load Testing', 'Security Testing', 'Penetration Testing', 'OWASP',
                'SSL/TLS', 'OAuth 2.0', 'JWT', 'API Gateway', 'Rate Limiting', 'Caching Strategies',
                'Redis Cluster', 'MongoDB Sharding', 'Database Optimization', 'Query Performance', 'Indexing',
                'Docker Compose', 'Kubernetes', 'Helm Charts', 'ArgoCD', 'Jenkins', 'GitLab CI', 'GitHub Actions'
              ].map((skill, index) => (
                <div
                  key={`right-${index}`}
                  className="px-6 py-3 bg-bg-card text-gray-300 rounded-2xl text-sm font-medium shadow-lg border border-white/10 whitespace-nowrap flex-shrink-0 hover:border-accent-purple/50 hover:text-accent-purple transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>

            {/* Third Row - Moving Left (Faster) */}
            <motion.div
              className="flex space-x-4"
              animate={{ x: [0, -1200] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[
                'TypeScript', 'ESLint', 'Prettier', 'Husky', 'Lint-staged', 'Commitizen', 'Conventional Commits',
                'Semantic Versioning', 'Changelog Generation', 'Release Automation', 'Dependency Management',
                'npm', 'yarn', 'pnpm', 'Lerna', 'Nx', 'Monorepo Management', 'Package Publishing',
                'Code Splitting', 'Lazy Loading', 'Tree Shaking', 'Bundle Analysis', 'Webpack Bundle Analyzer',
                'Rollup', 'Parcel', 'Vite', 'Snowpack', 'Build Tools', 'Development Server', 'Hot Reload',
                'TypeScript', 'ESLint', 'Prettier', 'Husky', 'Lint-staged', 'Commitizen', 'Conventional Commits'
              ].map((skill, index) => (
                <div
                  key={`left-fast-${index}`}
                  className="px-6 py-3 bg-bg-card text-gray-300 rounded-2xl text-sm font-medium shadow-lg border border-white/10 whitespace-nowrap flex-shrink-0 hover:border-accent-purple/50 hover:text-accent-purple transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Static Skills Grid for Better Organization */}
          <div className="mt-16 text-center">
            <h4 className="text-2xl font-bold text-white mb-8">
              Core Technology Stack
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { category: 'Frontend', skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte'] },
                { category: 'Backend', skills: ['Node.js', 'Python', 'Java', 'Go', 'Rust', 'PHP'] },
                { category: 'Database', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB'] },
                { category: 'DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform'] }
              ].map((techGroup, groupIndex) => (
                <motion.div
                  key={techGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-card rounded-2xl p-6 border border-white/10"
                >
                  <h5 className="text-lg font-bold text-accent-purple mb-4">{techGroup.category}</h5>
                  <div className="space-y-2">
                    {techGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 hover:text-accent-green transition-colors duration-200 cursor-pointer"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 