import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  TrendingUp,
  Rocket,
  Target,
} from "lucide-react";

const Experience: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TP Global Pvt.Ltd (Team Pumpkin)",
      location: "Bangaluru, India",
      period: "MAR 2023 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers, implementing best practices, and architecting scalable solutions.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "MongoDB",
        "Microservices",
      ],
      achievements: [
        "Finance Management Platform (Built from Scratch)Developed a financial web app using Vue 3, Nuxt.js, and Next.js. Integrated Google API authentication and Two-Factor Authentication (2FA) for security. Designed APIs using FeathersJS, MongoDB, and implemented schema validation. Web Scrapi",
        "Web Scraping & Data Extraction ToolAutomated data collection from LinkedIn, Google, and Facebook using Python, Selenium, and BeautifulSoup4. Processed and structured scraped data for business intelligence.",
        "Recruitment ATS Enhancement: Upgraded an existing ATS platform with Google API integrations (authentication, location services). Migrated frontend from Vue.js to React.js, using MongoDB and Tailwind CSS.",
        "Video Conferencing & Messaging System: Integrated Google Meet API for meeting scheduling, and Socket.io for real-time messaging. Built using React.js, MongoDB, and Tailwind CSS.",
      ],
      icon: Rocket,
      color: "from-accent-purple to-accent-blue",
    },
    {
      id: 2,
      title: "Full Stack Web Developer - Junior",
      company: "TP Global Pvt.Ltd (Team Pumpkin)",
      location: "Bangaluru, India",
      period: "Mar 2022 - Dec 2023",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with design and marketing teams to deliver high-quality solutions and improve user experience.",
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "GraphQL",
        "Jest",
      ],
      achievements: [
        "Developed a Recruitment & Application Tracking System (ATS) with role-based access for admins and system users.",
        "Integrated a third-party job posting API to automate job listings and applications on Indeed.",
        "Built using Vue.js, Nuxt.js (SSR), Vuetify, FeathersJS, Knex.js, Objection.js, ExpressJS.",
        "Developed a Social Media Automation Platform for scheduling posts, likes, comments, and shares across LinkedIn, Twitter, Facebook, and Instagram.Built using React Native, Vue.js, Tailwind CSS, FeathersJS, ExpressJS,Knex.js, Objection.js.",
      ],
      icon: TrendingUp,
      color: "from-accent-green to-accent-emerald",
    },
    {
      id: 3,
      title: "Full Stack Web Developer Intern",
      company: 'TP Global Pvt.Ltd (Team Pumpkin)',
      location: 'Bangaluru, India',
      period: 'Nov 2021 - Mar 2022',
      description:
        "Started as a frontend developer, quickly learned backend technologies and contributed to full-stack development. Worked in an agile environment with rapid iteration cycles.",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Git",
        "Node.js",
      ],
      achievements: [
        "Designed and developed the admin panel for an EdTech platform using Vue.js, Vuetify, and Node.js.",
        "Managed MySQL database with ORM implementation using Knex.js and Objection.js.",
        'Developed and integrated RESTful APIs using FeathersJS and ExpressJS',
      ],
      icon: Target,
      color: "from-accent-orange to-accent-red",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      school: "Birla Vishvakarma Mahavidyalaya",
      location: "Anand,Gujarat",
      period: "2017 - 2021",
      description:
        "Specialized in Software Engineering and Web Development. Completed capstone project on AI-powered web applications.",
      achievements: [
        "Event Core Committee Member",
        "Member of CSI (Computer Society of India) Team)",
        "Coding Hackathon Participant",
        "Tech Event Competitor",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      description:
        "Comprehensive knowledge of AWS services and best practices for application development.",
      icon: "☁️",
    },
    {
      id: 2,
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-789012",
      description:
        "Expertise in MongoDB administration, optimization, and best practices.",
      icon: "🗄️",
    },
    {
      id: 3,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "REACT-345678",
      description:
        "Advanced React development skills including hooks, context, and performance optimization.",
      icon: "⚛️",
    },
    {
      id: 4,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-901234",
      description:
        "Expertise in Google Cloud Platform development and deployment.",
      icon: "🔧",
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Section Header with Moving Blocks Animation */}
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
              My Journey
            </h2>
            <Sparkles className="w-8 h-8 text-accent-purple" />
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
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
            From university graduate to senior developer - here's the path that
            led me to where I am today
          </motion.p>
        </motion.div>

        {/* Work Experience Section - Improved Layout */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-accent-purple mr-4" />
              Professional Experience
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My career progression from junior developer to senior full-stack
              engineer
            </p>
          </motion.div>

          {/* Improved Timeline Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-green"
            ></motion.div>

            <div className="space-y-16">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-0 w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center shadow-2xl shadow-accent-purple/25 border-4 border-bg-primary z-10"
                  >
                    <job.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="ml-24 flex-1"
                  >
                    <div className="bg-bg-card rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-accent-purple/30 group">
                      {/* Job Header */}
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors duration-300">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4 text-accent-blue" />
                            <span className="text-accent-blue font-semibold">
                              {job.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-accent-green" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-accent-purple" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {job.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-bg-surface text-accent-purple text-sm rounded-xl font-medium border border-accent-purple/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-bold text-white mb-4 flex items-center">
                          <Award className="w-5 h-5 text-accent-green mr-2" />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="text-gray-300 flex items-start space-x-3"
                            >
                              <span className="text-accent-green mt-2 text-lg">
                                •
                              </span>
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-accent-green mr-4" />
              Education
            </h3>

            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-bg-card rounded-2xl shadow-xl p-8 mb-8 border border-white/10"
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {edu.degree}
                </h4>
                <p className="text-accent-green font-semibold mb-3 text-lg">
                  {edu.school}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-accent-purple" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {edu.description}
                </p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-400 flex items-start space-x-2"
                    >
                      <span className="text-accent-green mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-card rounded-2xl shadow-xl p-6 border border-white/10 hover:border-accent-purple/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 text-lg group-hover:text-accent-purple transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-accent-purple font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full font-medium">
                      {cert.date}
                    </span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
