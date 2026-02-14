
import React from 'react';
import { SERVICES } from '../constants';

const serviceImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
  '2': 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
  '3': 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
  '4': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800',
  '5': 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=800',
  '6': 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Curated Menu</span>
            <h2 className="text-5xl md:text-6xl leading-tight">Crafting Beauty, <br /><span className="italic">One Strand at a Time</span></h2>
          </div>
          <p className="text-[#6B6661] max-w-sm leading-relaxed">
            From precision architecture to avant-garde color, our services are designed to enhance your natural aesthetic with professional precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="group">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
                <img 
                  src={serviceImages[service.id] || 'https://picsum.photos/seed/hair/800/1000'} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                   <a href="#booking" className="text-white text-xs uppercase tracking-widest font-bold">Book this service</a>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif">{service.name}</h3>
                <span className="text-[#C5A059] font-medium tracking-tight">{service.price}</span>
              </div>
              
              <p className="text-[#6B6661] text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {service.description}
              </p>
              
              <div className="flex items-center text-[10px] uppercase tracking-[0.2em] text-[#9A948F] font-bold">
                <span className="w-8 h-px bg-[#C5A059] mr-3"></span>
                {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
