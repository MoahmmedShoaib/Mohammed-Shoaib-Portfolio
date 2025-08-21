import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <section className="min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="container-normal">
        <div className="space-y-1 sm:space-y-2 lg:space-y-3 mb-6 lg:mb-8 text-center lg:text-left">
          {/* Hey! */}
          <div className="hero-greeting text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white reveal-blur">
            Hey! I'm ,
          </div>
          
          {/* Mohammed Shoaib */}
          <div className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold whitespace-nowrap reveal-blur-delay-1">
            Mohammed Shoaib
          </div>
          
          {/* AIML Undergrad & Web Developer */}
          <div className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 reveal-blur-delay-2">
            AIML Undergrad & Web Developer
          </div>
        </div>
        
        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Link 
            to="/projects" 
            className="cool-hero-button"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

