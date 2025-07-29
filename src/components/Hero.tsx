import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            MOHAMMED{' '}
            <span className="text-gray-300">SHOAIB</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            B.Tech CSE (AI & ML) Student | Web Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-12 text-gray-200"
          >
            "Turning ideas into intelligent code"
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full text-white font-semibold border border-gray-600 hover:bg-gray-800 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown size={32} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;