
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    serviceId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleFinalConfirm = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowModal(false);
    setStep(5); // Success step
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ serviceId: '', date: '', time: '', name: '', email: '', phone: '' });
  };

  return (
    <section id="booking" className="py-32 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Context & Inspiration */}
          <div className="lg:col-span-5">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Reservation</span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Begin Your <br /><span className="italic font-serif">Transformation</span></h2>
            <p className="text-[#6B6661] text-lg leading-relaxed mb-12">
              Select your desired experience and preferred timing. Our artisans are ready to welcome you into a space of tranquility and creative excellence.
            </p>
            
            <div className="space-y-8 p-8 bg-white border border-[#F1E9DE] rounded-sm">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-[#F8F5F1] rounded-full flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 text-[#2D2926]">The Studio</h4>
                  <p className="text-[#6B6661] text-sm">2419 State Hwy 121, Suite 110<br />Plano, Texas 75025</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-[#F8F5F1] rounded-full flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 text-[#2D2926]">Studio Hours</h4>
                  <p className="text-[#6B6661] text-sm">Tuesday – Saturday<br />10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-14 shadow-2xl relative border-t-4 border-[#C5A059]">
            
            {step < 5 && (
              <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      step === s ? 'bg-[#2D2926] text-white' : 
                      step > s ? 'bg-[#C5A059] text-white' : 'bg-gray-50 text-gray-300'
                    }`}>
                      {step > s ? '✓' : `0${s}`}
                    </div>
                    <div className="ml-4 hidden sm:block">
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${step === s ? 'text-[#2D2926]' : 'text-gray-300'}`}>
                        {s === 1 ? 'Experience' : s === 2 ? 'Timing' : 'Client Info'}
                      </p>
                    </div>
                    {s < 3 && <div className="mx-6 w-12 h-px bg-gray-100 hidden md:block"></div>}
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleReview}>
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif mb-8">Choose Your Service</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {SERVICES.map((s) => (
                      <div 
                        key={s.id} 
                        onClick={() => setFormData({...formData, serviceId: s.id})}
                        className={`group relative p-6 border transition-all cursor-pointer ${
                          formData.serviceId === s.id ? 'border-[#C5A059] bg-[#FDFBF7]' : 'border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col h-full">
                          <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">{s.category}</span>
                          <h4 className="font-bold text-sm mb-1">{s.name}</h4>
                          <p className="text-xs text-gray-400 mb-4">{s.duration}</p>
                          <div className="mt-auto flex justify-between items-center">
                             <span className="text-sm font-bold text-[#2D2926]">{s.price}</span>
                             {formData.serviceId === s.id && (
                               <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
                             )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.serviceId}
                    className="w-full mt-10 bg-[#2D2926] text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    Select Timing
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif mb-8">Preferred Timing</h3>
                  <div className="space-y-8 mb-10">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] block mb-3 font-bold text-gray-400">Visit Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full p-5 border border-gray-100 outline-none focus:border-[#C5A059] text-sm bg-gray-50/50"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] block mb-3 font-bold text-gray-400">Arrival Time</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({...formData, time})}
                            className={`py-3 text-xs font-bold border transition-all ${
                              formData.time === time ? 'bg-[#2D2926] text-white border-[#2D2926]' : 'border-gray-100 hover:border-gray-300 text-gray-500'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 py-5 border border-[#2D2926] text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-50">Back</button>
                    <button type="button" onClick={nextStep} disabled={!formData.date || !formData.time} className="flex-[2] bg-[#2D2926] text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] disabled:bg-gray-100 disabled:text-gray-400">Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif mb-8">Your Details</h3>
                  <div className="space-y-6 mb-10">
                    <div className="relative">
                      <input 
                        required
                        placeholder="Full Name" 
                        className="w-full p-5 border border-gray-100 outline-none focus:border-[#C5A059] text-sm bg-gray-50/50"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <input 
                        required
                        placeholder="Email Address" 
                        type="email"
                        className="w-full p-5 border border-gray-100 outline-none focus:border-[#C5A059] text-sm bg-gray-50/50"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <input 
                        required
                        placeholder="Phone Number" 
                        className="w-full p-5 border border-gray-100 outline-none focus:border-[#C5A059] text-sm bg-gray-50/50"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 py-5 border border-[#2D2926] text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-50">Back</button>
                    <button type="submit" disabled={!formData.name || !formData.email || !formData.phone} className="flex-[2] bg-[#C5A059] text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#2D2926] disabled:bg-gray-100">Review Booking</button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="animate-fade-in text-center py-10">
                  <div className="w-20 h-20 bg-[#FDFBF7] border-2 border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Reservation Requested</h3>
                  <p className="text-[#6B6661] mb-10 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name.split(' ')[0]}. We have received your request for a {selectedService?.name}. We'll contact you shortly at {formData.phone} to confirm.
                  </p>
                  <button 
                    type="button"
                    onClick={resetForm}
                    className="border-b-2 border-[#C5A059] text-xs uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors pb-1"
                  >
                    Make another booking
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2D2926]/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white max-w-lg w-full p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-3xl font-serif mb-2">Review Details</h3>
            <p className="text-[#6B6661] text-xs uppercase tracking-widest mb-8 font-bold">Please confirm your selection</p>
            
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-50">
                <span className="text-[10px] uppercase tracking-widest text-[#9A948F] font-bold">Service</span>
                <div className="col-span-2">
                   <p className="text-sm font-bold text-[#2D2926]">{selectedService?.name}</p>
                   <p className="text-xs text-[#C5A059] font-medium">{selectedService?.price}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-50">
                <span className="text-[10px] uppercase tracking-widest text-[#9A948F] font-bold">Date & Time</span>
                <div className="col-span-2">
                   <p className="text-sm font-bold text-[#2D2926]">{formData.date}</p>
                   <p className="text-sm text-[#2D2926]">{formData.time}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-50">
                <span className="text-[10px] uppercase tracking-widest text-[#9A948F] font-bold">Client</span>
                <div className="col-span-2">
                   <p className="text-sm font-bold text-[#2D2926]">{formData.name}</p>
                   <p className="text-xs text-[#6B6661]">{formData.email}</p>
                   <p className="text-xs text-[#6B6661]">{formData.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleFinalConfirm}
                disabled={isSubmitting}
                className="w-full bg-[#2D2926] text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                  </>
                ) : 'Confirm & Request Visit'}
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-4 text-[10px] uppercase tracking-[0.2em] text-[#9A948F] font-bold hover:text-[#2D2926] transition-colors"
              >
                Go back and edit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
