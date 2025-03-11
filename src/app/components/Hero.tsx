// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Terminal from './Terminal';

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

            {/* Logo */}
            <div className="relative z-10 w-full max-w-[800px] px-4">
                <Image
                    src="/logo.png"
                    alt="Layer One Logo"
                    width={600}
                    height={120}
                    className="w-full h-auto"
                    priority
                />
            </div>
        </div>
    </>
);
}