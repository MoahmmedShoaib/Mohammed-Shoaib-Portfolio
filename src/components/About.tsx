import React from 'react';
import profileImg from '../assets/WhatsApp Image 2025-07-10 at 11.04.47_1e34026a.jpg';

const aboutText = `
I'm Shoaib, a 1st-year B.Tech CSE (AI & ML) student, passionate about building real-world tech solutions by combining AI and software. I've participated in hackathons where I built projects like ML-based civic reporting tools and face recognition systems. I've also created responsive web apps focused on clean UI/UX.

As a web developer, I enjoy working with HTML, CSS, JavaScript, React, and Python frameworks. I'm currently exploring how AI can enhance user experiences and focusing on DSA with Java to strengthen my core development skills.
`;

const About = () => {
  return (
    <section
      id="about"
  className="w-full flex items-center bg-gradient-to-br from-[#2a0845] to-[#4f2c77] px-0 py-16 shadow-2xl shadow-black/40"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-0 md:gap-12 px-6 md:px-16 py-20 md:py-0">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-10 md:mb-0 drop-shadow-xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-lg"
            loading="lazy"
          />
        </div>
        {/* About Text */}
        <div className="w-full flex flex-col justify-center items-center text-center drop-shadow-xl py-8 px-4 md:px-10 bg-white/5 rounded-2xl" style={{ maxWidth: 600 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight text-center">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed whitespace-pre-line text-center">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;