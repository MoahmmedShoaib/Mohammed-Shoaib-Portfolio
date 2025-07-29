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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Let's Connect
          </motion.h2>

          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-10 w-full max-w-xl text-center"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>
              <div className="flex items-center justify-center mb-6">
                <MapPin className="text-gray-400 mr-3" size={20} />
                <span className="text-gray-400">India</span>
              </div>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${link.color} transition-colors duration-200`}
                  >
                    {link.icon}
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