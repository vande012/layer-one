'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Joe",
    role: "CEO",
    image: "/Joe.png",
    bio: "Tech visionary with 15+ years of experience in IT solutions and business transformation.",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      email: "john@layerone.com"
    }
  },
  {
    name: "Ryan",
    role: "Head of Software Engineering",
    image: "/Ryan.jpg",
    bio: "Programmer, Designer, and Entrepreneur with a passion for creating innovative solutions.",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      email: "john@layerone.com"
    }
  },
  {
    name: "Joe",
    role: "CEO",
    image: "/Joe.png",
    bio: "Tech visionary with 15+ years of experience in IT solutions and business transformation.",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      email: "john@layerone.com"
    }
  },
  {
    name: "Joe",
    role: "CEO",
    image: "/Joe.png",
    bio: "Tech visionary with 15+ years of experience in IT solutions and business transformation.",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      email: "john@layerone.com"
    }
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-black/60" 
      id="team-section"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with animations */}
        <motion.div 
          className="mb-16 text-center"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[orbitron] mb-4 text-white tracking-wide"
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            MEET THE TEAM
          </motion.h2>
          
          <motion.div 
            className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#eb6a1e] to-transparent mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl leading-relaxed text-white/80 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Layer One&apos;s backbone is its exceptional team. Our experts bring robust experience and cutting-edge skills to the table. We are more than just a team; we are a closely-knit group that thrives on collaboration and innovation.
          </motion.p>
        </motion.div>
        
        {/* Team Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`team-member-${index}`}
              className="group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:border-[#eb6a1e]/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + index * 0.1, // Stagger based on index
              }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(235, 106, 30, 0.2)'
              }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 space-y-4">
                {/* Image Container with animated border */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <motion.div 
                    className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ width: '95%', height: '95%', top: '2.5%', left: '2.5%' }}
                  />
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-full w-full h-full object-cover mx-auto border-2 border-black"
                    width={160}
                    height={160}
                  />
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#eb6a1e] rounded-tr-md"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#eb6a1e] rounded-bl-md"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1 font-[orbitron]">{member.name}</h3>
                  <p className="text-[#eb6a1e] font-medium mb-4">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{member.bio}</p>
                </div>

                {/* Social Links with hover effects */}
                {member.social && (
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <motion.a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#eb6a1e] transition-colors duration-300 p-2"
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        <FaLinkedin size={20} />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#eb6a1e] transition-colors duration-300 p-2"
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a 
                        href={`mailto:${member.social.email}`}
                        className="text-white/60 hover:text-[#eb6a1e] transition-colors duration-300 p-2"
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        <FaEnvelope size={20} />
                      </motion.a>
                    )}
                  </div>
                )}
                
                {/* Floating accent element */}
                <motion.div 
                  className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-[#eb6a1e]/20 to-purple-500/10 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;