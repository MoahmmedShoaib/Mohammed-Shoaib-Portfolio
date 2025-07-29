import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/WhatsApp Image 2025-07-10 at 11.04.47_1e34026a.jpg';

const About = () => {
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

  return (
    <>
      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            >
              About Me
            </motion.h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-16 items-center">
                {/* Photo Section */}
                <motion.div variants={itemVariants} className="flex justify-center">
                  <div className="glass rounded-full p-6 w-[300px] h-[300px] overflow-hidden profile-container">
                    <img
                      src={profileImg}
                      alt="Mohammed Shoaib"
                      className="profile-image"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* About Text */}
                <motion.div variants={itemVariants} className="md:col-span-2">
                  <div className="glass p-8 rounded-2xl">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      I'm Shoaib, a 1st-year B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I’m deeply passionate about building real-world tech solutions that blend AI, software, and innovation.
                      <br /><br />
                      Over the past few months, I’ve actively participated in hackathons where I built end-to-end applications like ML-powered civic reporting tools and face recognition-based verification systems. I've also developed several responsive web apps with strong UI/UX—ranging from weather apps and travel planners to quiz-based project recommendation tools.
                      <br /><br />
                      As a web developer, I enjoy turning ideas into clean, user-friendly interfaces using HTML, CSS, JavaScript, React, and Python frameworks. I'm also exploring how AI can enhance everyday user experiences—from automation to smart system design.
                      <br /><br />
                      Currently, I’m diving deeper into Data Structures and Algorithms in Java to strengthen my core problem-solving skills and prepare for future opportunities in development and research.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* What I Do Section */}
      <section id="what-i-do" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
              What I Do
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <div>
                <span className="font-semibold text-white">AI & ML Student</span>
                <div>
                  Studying Artificial Intelligence and Machine Learning with a focus on real-world applications in computer vision, NLP, and smart systems.
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">Web Developer</span>
                <div>
                  Creating modern, responsive websites using HTML, CSS, JavaScript, React, and Python frameworks. Focused on clean UI and performance.
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">UI/UX Enthusiast</span>
                <div>
                  Designing visually appealing and user-friendly interfaces with a focus on minimalism, accessibility, and seamless user experiences.
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">Hackathon's</span>
                <div>
                  Passionate about building quick, impactful tech solutions under time constraints. Experienced in addressing real-world challenges through innovation.
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">Founder – Vibe Build Agency</span>
                <div>
                  Helping brands grow by building websites, editing content, and creating AI-powered ads for social media and beyond.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;