'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Terminal from './Terminal';

export default function TerminalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden "
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-1/2 h-1/2 bg-gradient-radial from-[#eb6a1e]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-2/3 bg-gradient-radial from-purple-900/10 to-transparent"></div>
        
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
          <div className="absolute -right-1/4 top-1/3 w-full h-[1px] bg-gradient-to-r from-[#eb6a1e]/40 via-transparent to-transparent transform rotate-12"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Terminal - spans more columns for emphasis */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-1 relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="h-[280px] sm:h-[320px] md:h-[320px] bg-black/90 rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_25px_rgba(235,106,30,0.1)]">
              <Terminal />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#eb6a1e]/70 rounded-br-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#eb6a1e]/70 rounded-tl-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            
            {/* Floating accent element */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#eb6a1e]/20 to-purple-500/10 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* CTA section - overlapping for visual interest */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-6 flex flex-col items-center lg:items-start justify-center bg-gradient-to-br from-black/90 to-gray-900/80 p-8 sm:p-10 rounded-xl border border-gray-800 shadow-[0_0_25px_rgba(0,0,0,0.3)] mt-4 lg:-mt-2 lg:z-20 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Diagonal accent line */}
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#eb6a1e]/70 to-transparent transform rotate-12" />
            
            <motion.h2 
              className="text-white text-2xl sm:text-3xl md:text-4xl font-[orbitron] text-center lg:text-left mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb6a1e] to-orange-400">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-center lg:text-left mb-6 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Expert IT solutions tailored for local businesses looking to enhance their digital presence and operational efficiency.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="mailto:contact@layeroneconsultants.com"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-base font-medium rounded-md text-white bg-gradient-to-r from-[#eb6a1e] to-orange-600 hover:from-orange-600 hover:to-[#eb6a1e] transition-all duration-500"
              >
                <span className="relative z-10">Get Started Today</span>
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
              </Link>
            </motion.div>
            
            {/* Floating accent element */}
            <motion.div 
              className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-[#eb6a1e]/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}