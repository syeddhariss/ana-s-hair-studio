
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2926] text-[#A6A19D] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl text-white mb-6 tracking-tighter">ANA'S <span className="font-light">HAIR STUDIO</span></h2>
            <p className="max-w-md leading-relaxed mb-8">
              Dedicated to providing exceptional hair services in a sophisticated environment. 
              Our mission is to empower our clients through personalized beauty experiences.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Yelp</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6 font-bold">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#stylist" className="hover:text-white transition-colors">AI Consultant</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Online</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6 font-bold">Contact</h4>
            <address className="not-italic text-sm space-y-4">
              <p>2419 State Hwy 121 Ste 110<br />Plano, TX 75025</p>
              <p className="text-white font-semibold">(555) 123-4567</p>
              <p>hello@anashairstudio.net</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em]">
          <p>© 2024 Ana's Hair Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
