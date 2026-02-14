
import React, { useState } from 'react';
import { getHairConsultation } from '../services/geminiService';

const AIStylist: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const result = await getHairConsultation(input);
    setResponse(result || null);
    setLoading(false);
  };

  return (
    <section id="stylist" className="py-24 bg-[#F8F5F1]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-bl-full"></div>
          
          <div className="text-center mb-10 relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2 block">Powered by Gemini</span>
            <h2 className="text-4xl mb-4">Smart Hair Consultant</h2>
            <p className="text-[#6B6661] leading-relaxed">
              Not sure what style suits you? Ask our AI stylist for a personalized recommendation based on your needs.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-6">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: I want a low-maintenance look for my fine, wavy hair..."
                className="w-full border-b-2 border-gray-200 focus:border-[#C5A059] outline-none py-4 text-lg resize-none transition-all placeholder:text-gray-300"
                rows={2}
              />
            </div>
            <button
              disabled={loading}
              className={`w-full py-4 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 ${
                loading ? 'bg-gray-200 text-gray-400' : 'bg-[#2D2926] text-white hover:bg-[#C5A059]'
              }`}
            >
              {loading ? 'Consulting the Stars...' : 'Get Recommendation'}
            </button>
          </form>

          {response && (
            <div className="mt-12 p-8 bg-[#FDFBF7] border-l-4 border-[#C5A059] animate-fade-in relative z-10">
              <h4 className="text-sm uppercase tracking-widest mb-4 font-bold text-[#2D2926]">Our Suggestion:</h4>
              <p className="text-[#4A443F] leading-relaxed italic">
                "{response}"
              </p>
              <div className="mt-6 flex justify-end">
                <a href="#booking" className="text-[#C5A059] text-xs uppercase tracking-widest font-bold hover:underline">
                  Book this look →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
