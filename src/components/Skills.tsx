import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java (DSA)', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      icon: <Code2 size={28} className="text-white/80" />,
    },
    {
      title: 'Frameworks & Tools',
      skills: ['MERN Stack', 'Flask/FastAPI', 'Git & GitHub'],
      color: 'from-purple-500 to-pink-500',
      icon: <Wrench size={28} className="text-white/80" />,
    },
    {
      title: 'Tech Domains',
      skills: ['Web Development', 'AI/ML', 'IoT', 'Hackathon Projects'],
      color: 'from-green-500 to-teal-500',
      icon: <Brain size={28} className="text-white/80" />,
    },
    {
      title: 'Other Tools',
      skills: ['Figma', 'Canva', 'ESP32', 'Arduino'],
      color: 'from-orange-500 to-red-500',
      icon: <Palette size={28} className="text-white/80" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
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
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                className="glass rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 min-h-[220px] sm:min-h-[260px] min-w-[140px] sm:min-w-[180px] md:min-w-[220px] aspect-square mx-auto shadow-xl w-full max-w-xs"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 mb-3 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: skillIndex * 0.08, duration: 0.4 }}
                      className="glass-dark rounded-full px-2 sm:px-3 py-1"
                    >
                      <span className="text-xs sm:text-sm text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;