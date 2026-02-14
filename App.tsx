
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
    <div className="min-h-screen relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="gallery" className="py-32 bg-[#F8F5F1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" alt="Studio Detail" className="w-full h-96 object-cover rounded-sm shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="w-full h-64 object-cover rounded-sm" />
                </div>
                <div className="pt-12 space-y-6">
                  <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" alt="Coloring" className="w-full h-64 object-cover rounded-sm" />
                  <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Finishing" className="w-full h-96 object-cover rounded-sm shadow-2xl" />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Legacy</span>
                <h2 className="text-6xl md:text-7xl mb-8 leading-[1.1]">Where Artistry <br />Meets <span className="italic font-serif">Intuition</span></h2>
                <p className="text-[#6B6661] text-xl leading-relaxed mb-10">
                  Ana's Hair Studio is more than a salon; it's a sanctuary for high-end transformation. 
                  We don't just follow trends—we define them through technical mastery and a deep understanding of each client's unique canvas.
                </p>
                <div className="grid grid-cols-2 gap-12 py-10 border-t border-[#E9E1D6]">
                  <div>
                    <h4 className="text-4xl font-serif mb-2">15+</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9A948F] font-bold">Years of Perfection</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-serif mb-2">5.0</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9A948F] font-bold">Average Rating</p>
                  </div>
                </div>
                <a href="#booking" className="inline-block mt-8 text-sm uppercase tracking-widest border-b-2 border-[#C5A059] pb-2 font-bold hover:text-[#C5A059] transition-colors">
                  Read Our Story
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

      {/* Persistent Call to Action for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#booking" className="block w-full bg-[#2D2926] text-white py-5 text-center text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#C5A059] transition-all font-bold">
          Reserve Experience
        </a>
      </div>
    </div>
  );
};

export default App;
