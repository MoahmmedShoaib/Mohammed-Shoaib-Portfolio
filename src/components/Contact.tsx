import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-16">
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
            Let's Connect
          </motion.h2>

          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-lg text-center"
            >
              <div className="text-glass mb-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-4 text-sm lg:text-base">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation. Feel free to reach out!
                </p>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="text-gray-300 mr-2" size={16} />
                  <span className="text-gray-300 text-sm lg:text-base">India</span>
                </div>
              </div>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    {React.cloneElement(link.icon, { size: 24 })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;