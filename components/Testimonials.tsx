
import React from 'react';

const TESTIMONIALS = [
  {
    quote: "Ana is a true artist! I've never had a balayage look so natural and vibrant. The studio atmosphere is just the cherry on top.",
    author: "Sarah M.",
    service: "Full Balayage"
  },
  {
    quote: "The most professional hair experience in Plano. Every detail is considered, and the results are consistently stunning.",
    author: "James L.",
    service: "Men's Modern Cut"
  },
  {
    quote: "I travel 40 minutes just to see Ana. Her attention to detail and technical skill is unmatched. Highly recommend!",
    author: "Michelle R.",
    service: "Designer Cut"
  },
  {
    quote: "The best designer cut I've ever received. It perfectly complements my face shape. Thank you, Ana's Hair Studio!",
    author: "Elena K.",
    service: "Women's Designer Cut"
  },
  {
    quote: "Transformative experience. The Keratin treatment changed my life. No more frizz, just pure shine.",
    author: "David P.",
    service: "Keratin Smoothing"
  },
  {
    quote: "A sanctuary for hair. The team is incredibly knowledgeable and welcoming. I wouldn't go anywhere else.",
    author: "Rachel S.",
    service: "Signature Blowout"
  }
];

const Testimonials: React.FC = () => {
  // Triple the items to ensure the scroll is perfectly seamless
  const scrollList = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative z-10">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Reputation</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1.1]">Praised by <br /><span className="italic font-serif">the Discerning</span></h2>
            <p className="text-[#6B6661] text-lg leading-relaxed mb-10 max-w-md">
              We take pride in the relationships we build with our clients. Their stories are a testament to our commitment to excellence.
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">4.9 Rating on Yelp</span>
            </div>
            <a href="#booking" className="inline-block bg-[#2D2926] text-white px-10 py-5 text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-300">
              Join the Experience
            </a>
          </div>

          <div className="relative h-[600px] pointer-events-none">
            {/* Gradient Fades for the scroll container */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-hidden">
              
              {/* Column 1: Scrolling Up */}
              <div className="relative">
                <div className="flex flex-col gap-6 animate-infinite-scroll-up">
                  {scrollList.map((item, idx) => (
                    <div key={`up-${idx}`} className="bg-[#FDFBF7] p-8 border border-[#F1E9DE] rounded-sm">
                      <svg className="w-8 h-8 text-[#C5A059]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 16.6569 10.6739 18 9.017 18H6.017V21H4.017Z" />
                      </svg>
                      <p className="text-[#4A443F] text-sm leading-relaxed mb-6 italic font-medium">"{item.quote}"</p>
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-[#2D2926] mb-1">{item.author}</h4>
                        <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">{item.service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Scrolling Down */}
              <div className="relative hidden md:block">
                <div className="flex flex-col gap-6 animate-infinite-scroll-down">
                  {scrollList.map((item, idx) => (
                    <div key={`down-${idx}`} className="bg-[#FDFBF7] p-8 border border-[#F1E9DE] rounded-sm">
                      <svg className="w-8 h-8 text-[#C5A059]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 16.6569 10.6739 18 9.017 18H6.017V21H4.017Z" />
                      </svg>
                      <p className="text-[#4A443F] text-sm leading-relaxed mb-6 italic font-medium">"{item.quote}"</p>
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-[#2D2926] mb-1">{item.author}</h4>
                        <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">{item.service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes infinite-scroll-down {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .animate-infinite-scroll-up {
          animation: infinite-scroll-up 40s linear infinite;
        }
        .animate-infinite-scroll-down {
          animation: infinite-scroll-down 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
