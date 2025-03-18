'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define the brands for the carousel
const brands = [
  { name: 'Apple', image: '/600px-Apple-logo.png' },
  { name: 'AWS', image: '/2560px-Amazon_Web_Services_Logo.svg.png' },
  { name: 'CDW', image: '/2560px-CDW_Logo.svg.png' },
  { name: 'Squarespace', image: '/Squarespace.png' },
  { name: 'Rubrik', image: '/a1a.Rubrik-horizontal-RGB-logos_transparent_White.png' },
  { name: 'APC', image: '/apc-01-logo-png-transparent.png' },
  { name: 'Cisco', image: '/Cisco-Symbol.png' },
  { name: 'Dell EMC', image: '/Dell_EMC.png' },
  { name: 'Citrix', image: '/Citrix.png' },
  { name: 'CommScope', image: '/CommScope.png' },
  { name: 'Fortinet', image: '/Fortinet.png' },
  { name: 'Framework', image: '/Framework_Computer.png' },
  { name: 'Graybar', image: '/graybar-logo.png' },
  { name: 'HP', image: '/Hewlett_Packard.png' },
];

export default function LogoShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black/20"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-[#eb6a1e]/10 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-gradient-radial from-purple-900/10 to-transparent"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Diagonal line */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
          <div className="absolute -left-1/4 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#eb6a1e]/30 to-transparent transform rotate-6"></div>
        </div>
      </div>
      
      {/* Main content container with max width */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title with animated line */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-12 sm:mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-[orbitron] text-white mb-4 tracking-wide"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } }
            }}
          >
            OUR TECHNOLOGIES
          </motion.h2>
          <motion.div 
            className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#eb6a1e] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-white/70 text-lg text-center max-w-2xl mt-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
            }}
          >
            We are proud to utilize these industry-leading technologies to deliver exceptional solutions.
          </motion.p>
        </motion.div>
        
        {/* Hexagonal Grid Logo Showcase */}
        <div className="relative mt-16">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={`logo-hex-${brand.name}`}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                {/* Hexagon shape container */}
                <div className="relative aspect-square flex items-center justify-center">
                  {/* Background hexagon with glow */}
                  <div 
                    className={`absolute inset-0 transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-40' : 'opacity-90'
                    }`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: 'linear-gradient(45deg, rgba(252, 252, 252, 0.2) 0%, rgba(60,60,60,0.2) 100%)',
                      boxShadow: hoveredIndex === index ? '0 0 20px rgba(250, 97, 8, 0.4)' : 'none',
                    }}
                  ></div>
                  
                  {/* Animated border */}
                  <div 
                    className="absolute inset-[2px] z-0"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: 'linear-gradient(45deg, transparent, transparent)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: hoveredIndex === index ? 1 : 0.3,
                    }}
                  >
                    {/* Animated corner accents */}
                    <motion.div 
                      className="absolute top-0 left-1/2 w-2 h-2 bg-[#eb6a1e]/90 -translate-x-1/2 -translate-y-1/2"
                      animate={hoveredIndex === index ? {
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      } : { opacity: 0.3, scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#eb6a1e]/90 -translate-x-1/2 translate-y-1/2"
                      animate={hoveredIndex === index ? {
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      } : { opacity: 0.3, scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute left-0 top-1/2 w-2 h-2 bg-[#eb6a1e]/90 -translate-x-1/2 -translate-y-1/2"
                      animate={hoveredIndex === index ? {
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      } : { opacity: 0.3, scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute right-0 top-1/2 w-2 h-2 bg-[#eb6a1e]/90 translate-x-1/2 -translate-y-1/2"
                      animate={hoveredIndex === index ? {
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      } : { opacity: 0.3, scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.9, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Inner content container */}
                  <div 
                    className="relative z-10 w-[85%] h-[85%] flex items-center justify-center p-3"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    {/* Logo image */}
                    <div className="relative w-[100%] h-[90%] transition-all duration-300">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
                        className="object-contain brightness-125 contrast-125 hover:brightness-150 hover:contrast-150 transition-all duration-300"
                        priority={index < 10}
                        loading={index < 10 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Brand name tooltip */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[110%] bg-black/70 px-3 py-1 rounded-md text-white text-xs whitespace-nowrap border border-[#eb6a1e]/30 z-20"
                    >
                      {brand.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#eb6a1e]/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
      </div>
    </section>
  );
}