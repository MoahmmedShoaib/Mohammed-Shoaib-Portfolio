import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Brain, Zap } from 'lucide-react';
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
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] px-4 lg:px-8 py-8 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Aryan</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
            Passionate about creating beautiful, functional web applications with modern technologies and intuitive user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className="border-2 border-purple-500 text-purple-400 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
            <img
              src="/api/placeholder/400/400"
              alt="Aryan's Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
