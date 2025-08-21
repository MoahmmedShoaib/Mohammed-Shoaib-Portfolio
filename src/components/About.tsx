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
      className="py-8 sm:py-12 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container-normal">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image on Left */}
          <div className="flex-shrink-0">
            <div className="profile-frame">
              <img
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* About Text on Right */}
          <div className="flex-1 text-center lg:text-left">
            <div className="text-glass">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white tracking-tight">
                About Me
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                {aboutText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;