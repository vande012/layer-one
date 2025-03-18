'use client';

import Image from 'next/image';
import Link from 'next/link';
import DotNetworkBackground from './WebBg';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:mt-20 w-full">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DotNetworkBackground />
      </div>
      
      {/* Main content container with flexbox */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Content wrapper with max-width */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Logo section */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[600px] sm:max-w-[600px] md:max-w-[500px] lg:max-w-[1200px] xl:max-w-[1000px]">
              <Image
                src="/layerone.svg"
                alt="Layer One Logo"
                width={800}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
            
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-2xl text-center font-light tracking-widest mt-4 sm:mt-6 mb-2 sm:mb-4 animate-fade-in-delay">
              TECH SOLUTIONS FOR THE MODERN WORLD
            </p>
          </div>
          
                    {/* Coming Soon section with flickering effect */}
            <div className="text-center mt-2 mb-12 sm:mb-16 md:mb-20">
            <h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold font-[orbitron] tracking-wider mt-8 screen-flicker">
                <span className='hidden'>Layer One IT Consultants</span>
                <span className="glitch-text" data-text="COMING SOON">COMING SOON</span>
            </h1>
            </div>
            {/* Terminal component added below partners without affecting layout */}
            <div className="w-full h-[100px] sm:h-[150px] md:h-[200px] mt-2 sm:mt-4 rounded-md overflow-hidden text-center">
                <Terminal />
            </div>
          {/* Partners Section - with flex for alignment */}
          <div className="text-center animate-fade-in-delay mt-20 sm:mt-12 md:mt-16 0 w-full">
            <h2 className="text-white text-2xl sm:text-2xl md:text-4xl font-[orbitron] mb-4 sm:mb-6 border-b-2 border-[#eb6a1e] inline-block pb-2 animate-glow">
              PARTNERS
            </h2>
            
            <div className="flex justify-center items-center w-full">
              <Link 
                href="https://theunnamedcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80 w-full max-w-[250px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
              >
                <Image
                  src="/unnamed-logo.png"
                  alt="The Unnamed Corp - Gaming Community"
                  width={350}
                  height={100}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}