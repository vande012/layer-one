'use client';

import React from 'react';

const ScrollArrow = () => {
  const handleScrollClick = () => {
    // Smooth scroll to the partners section or next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-6">
      <div 
        className="scroll-arrow-wrapper"
        onClick={handleScrollClick} 
        aria-label="Scroll down"
      >
        <div className="scroll-text">SCROLL</div>
        <div className="scroll-arrow-container">
          {/* Symmetrical arrows that bounce only vertically */}
          <div className="arrows-wrapper">
            <div className="arrow first"></div>
            <div className="arrow second"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scroll-arrow-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }
        
        .scroll-text {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(235, 106, 30, 0.8);
          margin-bottom: 8px;
          font-family: 'orbitron', sans-serif;
        }
        
        .scroll-arrow-container {
          position: relative;
          width: 28px;
          height: 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .arrows-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          animation: vertical-bounce 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .arrow {
          position: absolute;
          width: 12px;
          height: 12px;
          border-left: 1.5px solid #eb6a1e;
          border-bottom: 1.5px solid #eb6a1e;
          left: 50%;
          transform: translateX(-50%) rotate(-45deg);
        }
        
        .arrow.first {
          top: 0;
          opacity: 1;
        }
        
        .arrow.second {
          top: 8px;
          opacity: 0.8;
        }
        
        @keyframes vertical-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        
        /* Glow effect on hover */
        .scroll-arrow-wrapper:hover .arrow {
          border-color: #ff7e33;
          filter: drop-shadow(0 0 3px rgba(235, 106, 30, 0.6));
          transition: all 0.3s ease;
        }
        
        .scroll-arrow-wrapper:hover .arrows-wrapper {
          animation-duration: 1.5s;
        }
        
        .scroll-arrow-wrapper:hover .scroll-text {
          color: #ff7e33;
          filter: drop-shadow(0 0 2px rgba(235, 106, 30, 0.4));
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default ScrollArrow; 