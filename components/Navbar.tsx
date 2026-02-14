
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight text-[#2D2926]">
          ANA'S <span className="font-light">HAIR STUDIO</span>
        </a>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#services" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors">Services</a>
          <a href="#gallery" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors">Gallery</a>
          <a href="#stylist" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors">AI Consultant</a>
          <a href="#booking" className="bg-[#2D2926] text-white px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-300">
            Book Appointment
          </a>
        </div>
        <button className="md:hidden text-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
