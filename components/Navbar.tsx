
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-[#2D2926]">
            ANA'S <span className="font-light">HAIR STUDIO</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#services" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors font-medium">Services</a>
            <a href="#gallery" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors font-medium">Gallery</a>
            <a href="#stylist" className="text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors font-medium">AI Consultant</a>
            <a href="#booking" className="bg-[#2D2926] text-white px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-300 font-bold">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#2D2926] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 px-6 text-center">
          <a onClick={toggleMenu} href="#services" className="text-2xl uppercase tracking-[0.2em] font-serif hover:text-[#C5A059]">Services</a>
          <a onClick={toggleMenu} href="#gallery" className="text-2xl uppercase tracking-[0.2em] font-serif hover:text-[#C5A059]">Gallery</a>
          <a onClick={toggleMenu} href="#stylist" className="text-2xl uppercase tracking-[0.2em] font-serif hover:text-[#C5A059]">AI Consultant</a>
          <a onClick={toggleMenu} href="#testimonials" className="text-2xl uppercase tracking-[0.2em] font-serif hover:text-[#C5A059]">Testimonials</a>
          <a onClick={toggleMenu} href="#booking" className="w-full bg-[#2D2926] text-white py-5 text-sm uppercase tracking-widest font-bold">
            Book Appointment
          </a>
          
          <div className="pt-12 border-t border-gray-100 w-full">
            <p className="text-[#9A948F] text-[10px] uppercase tracking-widest mb-4">Visit Us</p>
            <p className="text-sm text-[#2D2926]">Plano, Texas</p>
            <p className="text-sm text-[#2D2926] mt-2">(555) 123-4567</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
