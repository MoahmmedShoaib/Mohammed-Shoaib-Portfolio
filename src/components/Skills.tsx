import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java (DSA)', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      icon: <Code2 size={24} className="text-white/80" />,
    },
    {
      title: 'Frameworks & Tools',
      skills: ['MERN Stack', 'Flask/FastAPI', 'Git & GitHub'],
      color: 'from-purple-500 to-pink-500',
      icon: <Wrench size={24} className="text-white/80" />,
    },
    {
      title: 'Tech Domains',
      skills: ['Web Development', 'AI/ML', 'IoT', 'Hackathon Projects'],
      color: 'from-green-500 to-teal-500',
      icon: <Brain size={24} className="text-white/80" />,
    },
    {
      title: 'Other Tools',
      skills: ['Figma', 'Canva', 'ESP32', 'Arduino'],
      color: 'from-orange-500 to-red-500',
      icon: <Palette size={24} className="text-white/80" />,
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
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 mb-4 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      className="relative"
                    >
                      <div className="glass-dark rounded-full px-3 py-2">
                        <span className="text-sm text-gray-400">{skill}</span>
                      </div>
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