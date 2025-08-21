import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'React', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      icon: <Code2 size={28} className="text-white/80" />,
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Flask/FastAPI', 'Git & GitHub'],
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
      skills: ['Figma', 'Canva', 'Arduino'],
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
    <section id="skills" className="py-16">
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
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                className="glass-card flex flex-col items-center justify-center p-6 min-h-[200px] glass-hover"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 mb-4 flex items-center justify-center">
                  {React.cloneElement(category.icon, { size: 24, className: "text-white" })}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: skillIndex * 0.08, duration: 0.4 }}
                      className="glass-dark rounded-full px-3 py-1"
                    >
                      <span className="text-xs lg:text-sm text-gray-300">{skill}</span>
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