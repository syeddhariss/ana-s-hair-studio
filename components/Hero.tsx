
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000" 
          alt="Elegant salon background" 
          className="w-full h-full object-cover"
        />
        {/* Refined subtle overlay: Much lower opacity and a more graceful gradient to let the image shine */}
        <div className="absolute inset-0 bg-white/20 md:bg-gradient-to-r from-white/60 via-white/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 md:py-0">
        <div className="max-w-2xl">
          <span className="inline-block text-[#C5A059] uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 animate-fade-in font-bold">
            Luxury Hair Care In Plano, TX
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl leading-[1.1] mb-8 animate-slide-up text-[#2D2926]">
            Unveil Your <br />
            <span className="italic font-serif">True Radiance</span>
          </h1>
          <p className="text-base md:text-xl text-[#4A443F] mb-10 max-w-lg leading-relaxed">
            Experience the ultimate hair transformation where artistry meets modern elegance. 
            Tailored styles for the sophisticated individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="bg-[#2D2926] text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-300 text-center font-bold">
              Reserve Experience
            </a>
            <a href="#services" className="border border-[#2D2926] text-[#2D2926] px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-widest hover:bg-[#2D2926] hover:text-white transition-all duration-300 text-center font-bold">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-20 bg-[#2D2926]"></div>
          <span className="rotate-90 origin-bottom-right uppercase text-[10px] tracking-[0.5em] text-[#2D2926] font-bold">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
