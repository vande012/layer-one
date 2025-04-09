'use client';

import Image from 'next/image';
import Terminal from './Terminal';

export default function Footer() {
  return (
    <footer className="relative h-[400px] w-full flex" id="contact">
      {/* Left side with Terminal */}
      <div className="w-1/2 bg-black overflow-hidden">
        <Terminal />
      </div>

      {/* Right side with content */}
      <div className="w-1/2 bg-[#232426] p-8 flex flex-col justify-between border-l border-[#eb6a1e]/10">
        <div className="flex flex-col items-start gap-8">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Layer One Logo"
            width={150}
            height={30}
            className="w-[150px] h-auto"
            priority
          />
          
          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-white/90">
            <a href="#about" className="hover:text-[#eb6a1e] transition-colors">About</a>
            <a href="#services" className="hover:text-[#eb6a1e] transition-colors">Services</a>
            <a href="#partners" className="hover:text-[#eb6a1e] transition-colors">Partners</a> 
            <a href="#team" className="hover:text-[#eb6a1e] transition-colors">Team</a>
            <a href="/contact" className="hover:text-[#eb6a1e] transition-colors">Contact</a>
          </nav>
        </div>

         {/* Contact info */}
         <div className="flex flex-col gap-4">
          <div className="text-white/60 font-roboto text-xs sm:text-sm">
            Contact: <a 
              href="/contact" 
              className="text-[#eb6a1e] hover:text-[#eb6a1e]/80 transition-colors"
            >
              <span className="hidden sm:inline">contact@layeroneconsultants.com</span>
              <span className="sm:hidden">Email Us</span>
            </a> <span className="hidden xs:inline">|</span> <span className="block xs:inline mt-1 xs:mt-0">© 2025 Layer One IT Consultants</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}