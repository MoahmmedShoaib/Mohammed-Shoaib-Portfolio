import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactPage = () => {
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

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={24} />,
      href: 'mailto:shoaib12006@gmail.com',
      color: 'text-gray-400 hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/mohammad-shoaib-aa684a278',
      color: 'text-gray-400 hover:text-white',
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/MoahmmedShoaib',
      color: 'text-gray-400 hover:text-white',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="container-normal">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
          >
            Get In Touch
          </motion.h1>

          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-2xl text-center"
            >
              <div className="text-glass mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-white">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation. Whether you're 
                  looking to collaborate on a project, need help with development, or 
                  simply want to connect, feel free to reach out!
                </p>
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="text-gray-300 mr-3" size={20} />
                  <span className="text-gray-300 text-base lg:text-lg">India</span>
                </div>
              </div>
              
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-4 text-white">
                        {React.cloneElement(link.icon, { size: 32 })}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {link.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {link.name === 'Email' && 'shoaib12006@gmail.com'}
                        {link.name === 'LinkedIn' && 'Connect with me'}
                        {link.name === 'GitHub' && 'View my code'}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-glass"
              >
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Quick Response
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to connect with me on LinkedIn for a faster response.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;