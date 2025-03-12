// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Terminal from './Terminal';
import Link from 'next/link';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf05d05,
        backgroundColor: 0x2d2d2d,
        points: 15.00,
        maxDistance: 24.00,
        spacing: 18.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" strategy="beforeInteractive" />
        
        <div ref={vantaRef} className="relative min-h-screen w-full flex flex-col items-center justify-center">
            {/* Terminal code in top left */}
            <div className="absolute top-0 left-0 z-10">
                <Terminal />
            </div>

            {/* Logo and Content Container - moved up with mt-[-100px] */}
            <div className="relative z-10 w-full max-w-[1200px] px-4 flex flex-col items-center gap-16">
                <Image
                    src="/logo.png"
                    alt="Layer One Logo"
                    width={1000}
                    height={200}
                    className="w-full h-auto"
                    priority
                />
                
                {/* Coming Soon Text */}
                <div className="text-center">
                    <h1 className="text-white text-5xl  font-roboto tracking-wider mb-4
                        animate-glow">
                        COMING SOON
                    </h1>
                    <p className="text-white/80 font-roboto text-2xl font-light tracking-widest mb-5
                        animate-fade-in-delay">
                        TECH SOLUTIONS FOR THE MODERN WORLD
                    </p>
                </div>

                {/* Partners Section */}
                <div className="text-center animate-fade-in-delay mt-20">
                    <h2 className="text-white text-3xl font-roboto mb-2 border-b-3 border-[#eb6a1e] inline-block pb-2 animate-glow">
                        PARTNERS
                    </h2>
                    <div className="flex justify-center">
                        <Link 
                            href="https://theunnamedcorp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-80"
                        >
                            <Image
                                src="/unnamed-logo.png"
                                alt="The Unnamed Corp - Gaming Community"
                                width={350}
                                height={100}
                                className="h-auto"
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-3 text-white/60 font-roboto text-sm text-center
                animate-fade-in-delay-long">
                Contact: <a 
                    href="mailto:contact@layeroneconsultants.com" 
                    className="text-[#eb6a1e] hover:text-[#eb6a1e]/80 transition-colors"
                >
                    contact@layeroneconsultants.com
                </a> | © 2025 Layer One IT Consultants
            </div>
        </div>
    </>
  );
}