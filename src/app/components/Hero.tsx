// @ts-nocheck
'use client';

import Image from 'next/image';
import Terminal from './Terminal';
import Link from 'next/link';
import DotNetworkBackground from './WebBg';

export default function Hero() {
  return (
    <>
        <DotNetworkBackground />
        
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
            {/* Terminal code in top left */}
            <div className="absolute top-0 left-0 z-10">
                <Terminal />
            </div>

            {/* Logo and Content Container - moved up with mt-[-100px] */}
            <div className="relative z-10 w-full max-w-[1200px] px-4 flex flex-col mt-6 items-center gap-16">
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
                    <h1 className="text-white lg:text-5xl text-3xl font-bold font-[orbitron] tracking-wider mb-4 
                        animate-glow">
                        COMING SOON
                    </h1>
                    <p className="text-white/80 lg:text-2xl text-md font-light tracking-widest mb-2
                        animate-fade-in-delay">
                        TECH SOLUTIONS FOR THE MODERN WORLD
                    </p>
                </div>

                {/* Partners Section */}
                <div className="text-center animate-fade-in-delay mt-5">
                    <h2 className="text-white text-3xl font-[orbitron] mb-2 border-b-3 border-[#eb6a1e] inline-block pb-2 animate-glow">
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