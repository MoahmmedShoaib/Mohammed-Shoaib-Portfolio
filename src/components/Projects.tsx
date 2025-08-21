import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'NextProject App',
      description: 'A project recommendation platform for students based on quiz answers.',
      tags: ['React', 'Node.js', 'MongoDB', 'AI'],
      code: 'https://github.com/MoahmmedShoaib/NextProject',
      live: 'https://dazzling-strudel-d79cc8.netlify.app/',
    },
    {
      title: 'Vibe-build Agency',
      description: 'Founded a web development agency helping brands with website development and content editing solutions.',
      tags: ['Next.js', 'React', 'Tailwind', 'Business'],
      code: 'https://github.com/MoahmmedShoaib/VERIPASS',
      live: 'https://vibe-build-agency.vercel.app/',
    },
    {
      title: 'Bus Pass Validator',
      description: 'Face recognition + QR-based bus pass checker for students.',
      tags: ['Python', 'OpenCV', 'QR Code', 'ML'],
      code: 'https://github.com/MoahmmedShoaib/VERIPASS',
      live: null, // Not deployed
    },
    {
      title: 'Neonexus - Hackathon Website',
      description: 'Built the official website for a national-level hackathon featuring event details, registration, and team management.',
      tags: ['React', 'Firebase', 'Tailwind', 'Framer'],
      code: null, // Code button not working
      live: 'https://neonexus36.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Add a state for showing the "project not deployed" message
  const [showNotDeployed, setShowNotDeployed] = React.useState(false);

  return (
    <section id="projects" className="py-16">
      <div className="container-normal">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-white"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 glass-hover transition-all duration-300"
              >
                <div className="w-full h-1 rounded-full bg-white mb-4"></div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-black border border-white rounded-full text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {/* View Project Button - Hide for Bus Pass Validator */}
                  {project.title !== 'Bus Pass Validator' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors text-sm"
                      onClick={() => {
                        // NextProject App
                        if (project.title === 'NextProject App' && project.live) {
                          window.open(project.live, '_blank');
                        }
                        // Vibe-build Agency
                        else if (project.title === 'Vibe-build Agency' && project.live) {
                          window.open(project.live, '_blank');
                        }
                        // Neonexus
                        else if (project.title.startsWith('Neonexus') && project.live) {
                          window.open(project.live, '_blank');
                        }
                      }}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </motion.button>
                  )}
                  
                  {/* Code Button - Hide for Neonexus */}
                  {project.title !== 'Neonexus - Hackathon Website' && project.code && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 glass-dark rounded-lg hover:bg-gray-800 transition-colors text-sm"
                      onClick={() => window.open(project.code, '_blank')}
                    >
                      <Github size={14} />
                      Code
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Show "project not deployed" message */}
          {showNotDeployed && (
            <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-xl shadow-lg z-50 border border-white/10">
              Project not deployed
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;