
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import VoiceAIConsultant from './components/VoiceAIConsultant';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="gallery" className="py-20 md:py-32 bg-[#F8F5F1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" alt="Studio Detail" className="w-full h-64 md:h-96 object-cover rounded-sm shadow-xl md:shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="w-full h-40 md:h-64 object-cover rounded-sm" />
                </div>
                <div className="pt-8 md:pt-12 space-y-4 md:space-y-6">
                  <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" alt="Coloring" className="w-full h-40 md:h-64 object-cover rounded-sm" />
                  <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Finishing" className="w-full h-64 md:h-96 object-cover rounded-sm shadow-xl md:shadow-2xl" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6 block">Our Legacy</span>
                <h2 className="text-4xl md:text-7xl mb-8 leading-[1.1]">Where Artistry <br />Meets <span className="italic font-serif">Intuition</span></h2>
                <p className="text-[#6B6661] text-base md:text-xl leading-relaxed mb-10 mx-auto lg:mx-0 max-w-lg">
                  Ana's Hair Studio is more than a salon; it's a sanctuary for high-end transformation. 
                  We don't just follow trends—we define them through technical mastery and a deep understanding of each unique canvas.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-12 py-8 md:py-10 border-t border-[#E9E1D6]">
                  <div>
                    <h4 className="text-3xl md:text-4xl font-serif mb-2">15+</h4>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#9A948F] font-bold">Years of Mastery</p>
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-4xl font-serif mb-2">5.0</h4>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#9A948F] font-bold">Average Rating</p>
                  </div>
                </div>
                <a href="#booking" className="inline-block mt-8 text-xs md:text-sm uppercase tracking-widest border-b-2 border-[#C5A059] pb-2 font-bold hover:text-[#C5A059] transition-colors">
                  Our Philosophy
                </a>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        
        <VoiceAIConsultant />

        <Testimonials />
        
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
