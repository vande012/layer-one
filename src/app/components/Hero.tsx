'use client';

import Image from 'next/image';
import Link from 'next/link';
import DotNetworkBackground from './WebBg';
import Terminal from './Terminal';
import { animate, createScope } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import ScrollArrow from './ScrollArrow';

export default function Hero() {
  const root = useRef(null);
  const scope = useRef(null);
  const logoRef = useRef(null);
  const partnersRef = useRef(null);
  const [showTagline, setShowTagline] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showScrollArrows, setShowScrollArrows] = useState(false);


  useEffect(() => {
    // Immediately ensure no dashed lines on paths
    const paths = document.querySelectorAll('.hero-logo path');
    paths.forEach((path) => {
      // Clear any dash properties that might cause dashed lines
      path.removeAttribute('stroke-dasharray');
      path.removeAttribute('stroke-dashoffset');
      // Set explicit solid style
      (path as SVGPathElement).style.strokeDasharray = 'none';
      (path as SVGPathElement).style.strokeDashoffset = '0';
    });
    
    // Create animation scope
    scope.current = createScope({ root }).add(scope => {
      const animateLogo = () => {
        if (hasAnimated) return; // Prevent re-animation
        setHasAnimated(true); // Mark as animated
        
        // Select all path elements in the SVG
        const paths = document.querySelectorAll('.hero-logo path');
        
        // Set initial state without causing dashes
        paths.forEach((path) => {
          (path as SVGPathElement).style.fillOpacity = '0';
          (path as SVGPathElement).style.strokeOpacity = '0';
          // Explicitly set to solid line
          (path as SVGPathElement).style.strokeDasharray = 'none';
          (path as SVGPathElement).style.strokeDashoffset = '0';
        });

        // Calculate total animation duration for all paths
        const pathCount = paths.length;
        const delayPerPath = 100;
        const strokeDuration = 1200;
        const fillDelay = 500;
        const totalDuration = (pathCount - 1) * delayPerPath + strokeDuration + fillDelay;

        // Animate each path
        paths.forEach((path, index) => {
          // Just fade in the stroke, no dash animation
          animate(path, {
            strokeOpacity: [0, 1],
            duration: strokeDuration,
            delay: index * delayPerPath,
            easing: 'easeInOutSine'
          });

          // Fill animation
          animate(path, {
            fillOpacity: [0, 1],
            duration: 800,
            delay: index * delayPerPath + fillDelay,
            easing: 'easeInOutQuad'
          });
        });

        // Show elements with reduced delays
        setTimeout(() => setShowTagline(true), totalDuration + 50);
        setTimeout(() => setShowComingSoon(true), totalDuration + 800);
        setTimeout(() => setShowTerminal(true), totalDuration + 1600);
        setTimeout(() => setShowScrollArrows(true), totalDuration + 2200);
      };

      // Initial state - make sure partners section is visible on mobile
      setTimeout(() => {
        if (!hasAnimated) {
          // If animation hasn't run yet (e.g., not in viewport), show elements anyway
          setShowTagline(true);
          setShowComingSoon(true);
          setShowTerminal(true);
          setShowScrollArrows(true);
          setHasAnimated(true);
        }
      }, 5000); // Fallback timeout of 5 seconds

      // Create intersection observer for logo only
      const logoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              animateLogo();
              logoObserver.disconnect(); // Only animate once
            }
          });
        },
        { threshold: 0.1 }
      );

      // Start observing the logo element
      if (logoRef.current) {
        logoObserver.observe(logoRef.current);
      }

      // Cleanup observers on scope revert
      scope.add('cleanup', () => {
        logoObserver.disconnect();
      });
    });

    // Cleanup animations on unmount
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, [hasAnimated]); // Add hasAnimated to dependency array

  return (
    <div ref={root}>
      <section className="relative min-h-screen w-full overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <DotNetworkBackground />
        </div>
        
        {/* Main content container with flexbox */}
        <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 pt-5 sm:pt-16">
          {/* Content wrapper with max-width */}
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            
            {/* Logo section */}
            <div className="w-full flex flex-col items-center justify-center space-y-3 sm:space-y-4 pt-8 sm:pt-4">
              {/* SVG container with better mobile sizing */}
              <div className="w-full max-w-[380px] xs:max-w-[440px] sm:max-w-[530px] md:max-w-[800px] lg:max-w-[730px] xl:max-w-[830px] pb-3 sm:pb-5 mb-2 sm:mb-4">
                {/* Improved SVG for mobile */}
                <svg 
                  ref={logoRef}
                  className="hero-logo w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 1200 400" 
                  preserveAspectRatio="xMidYMid meet"
                  fill="#ffffff"
                  style={{ minHeight: '190px' }}
                  shapeRendering="geometricPrecision"
                >
                  {/* SVG paths with solid strokes */}
                  <path d="M157 190.5H145V151H157V190.5Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M187 202.5H145V214.5H187V202.5Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M279 151L245.5 214.5H260L279 175L288.5 193H282V206H294L298.5 214.5H312.5L279 151Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M386 170.5L370 151H386L394.5 160.5L386 170.5Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M386 214.5H370L421.5 151H437.5L386 214.5Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M547 151H495.5V163H547V151Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M527 176.5H495.5V189H527V176.5Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M547 203H495.5V214.5H547V203Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M618.5 151H605.5V214.5H618.5V151Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M626 163V151H646.5C661.621 159.526 666 176.5 646.5 187L661 206.5H645L621 176.5H642.5C647.227 171.499 647.774 168.569 642.5 163H626Z" fill="#FFFDFD" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M811.5 151.5H776C771.409 153.626 769.756 155.813 768 161V207.5C769.887 211.926 771.497 213.913 776 216H811.5C818.016 213.828 820.535 211.249 822 203H780.5V164H809V190H822C823.163 162.718 821.668 152.417 811.5 151.5Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M894 216H881.5V151H894L913.5 174V195.5L894 172.5V216Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M943.5 216H930.5V151H943.5V216Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M1003.5 163V151H1056V163H1003.5Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M1003.5 189.5V177.5H1034.5V189.5H1003.5Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                  <path d="M1003.5 216V204.5H1056V216H1003.5Z" fill="white" stroke="#eb6a1e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none"/>
                </svg>
              </div>

              {showTagline && (
                <p className="text-white/80 text-lg sm:text-xl md:text-2xl lg:text-2xl text-center font-light tracking-wider mb-6 sm:mb-8 screen-flicker">
                  TECH SOLUTIONS FOR THE MODERN WORLD
                </p>
              )}
            
              {/* Coming Soon section with flickering effect */}
              {showComingSoon && (
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="relative inline-block text-4xl sm:text-5xl md:text-5xl lg:text-4xl font-bold font-[orbitron] tracking-wider screen-flicker">
                    <span className='hidden'>Layer One IT Consultants</span>
                    <span className="glitch-text" data-text="COMING SOON">COMING SOON</span>
                  </h1>
                </div>
              )}

              {/* Terminal component - reduced height container */}
              <div className="w-full h-[150px] sm:h-[180px] relative mb-2 sm:mb-4">
                <div className={`w-full h-[100px] sm:h-[150px] md:h-[180px] rounded-md overflow-hidden text-center transition-opacity duration-1000 ${showTerminal ? 'opacity-100' : 'opacity-0'}`}>
                  <Terminal />
                </div>
              </div>
              
              {/* Scroll indicator arrows */}
              <div className={`w-full flex justify-center mb-4 transition-opacity duration-1000 ${showScrollArrows ? 'opacity-100' : 'opacity-0'}`}>
                <ScrollArrow />
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section - ensure it's always visible once loaded */}
        <div 
          ref={partnersRef}
          className={`w-full relative z-20 mt-10 py-12 bg-black/40 overflow-visible transition-opacity duration-1000 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{position: 'relative', willChange: 'transform'}}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-white text-2xl sm:text-2xl md:text-4xl font-[orbitron] mb-8 sm:mb-10 border-b-2 border-[#eb6a1e] inline-block pb-2">
                PARTNERS
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-8 overflow-visible">
                <Link 
                  href="https://theunnamedcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
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
                <Link 
                  href="https://foreverfadedmke.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[300px]"
                >
                  <Image
                    src="/foreverlogo.png"
                    alt="Forever Logo"
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

      <style jsx>{`
        @keyframes subtleBounce {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(8px) rotate(45deg);
          }
        }

        .animate-subtle-bounce {
          animation: subtleBounce 3s ease-in-out infinite;
        }
        
        @media (max-width: 480px) {
          .hero-logo {
            width: 100%;
            min-height: 130px;
          }
        }
        
        /* Improve SVG rendering */
        :global(.hero-logo) {
          vector-effect: non-scaling-stroke;
        }
        
        :global(.hero-logo path) {
          stroke-width: 3px;
          stroke-miterlimit: 10;
          paint-order: stroke;
          stroke-dasharray: none !important;
          stroke-dashoffset: 0 !important;
        }
      `}</style>
    </div>
  );
}