
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';

// Audio Helpers
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

const VoiceAIConsultant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionRef = useRef<any>(null);
  const audioContextsRef = useRef<{ input: AudioContext; output: AudioContext } | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const stopConversation = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();
    setIsActive(false);
    setIsListening(false);
    setIsSpeaking(false);
  };

  const startConversation = async () => {
    setError(null);
    const apiKey = (window as any).process?.env?.API_KEY || '';
    
    if (!apiKey) {
      setError("AI Services currently unavailable. Please check configuration.");
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextsRef.current = { input: inputAudioContext, output: outputAudioContext };

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsListening(true);
            
            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              
              sessionPromise.then((session) => {
                if (session) session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              setIsSpeaking(true);
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
              
              const audioBuffer = await decodeAudioData(decode(audioData), outputAudioContext, 24000, 1);
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContext.destination);
              
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              });
              
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onerror: (e) => {
            console.error("Live AI Error:", e);
            setError("Connection error. Please try again.");
            stopConversation();
          },
          onclose: () => {
            stopConversation();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: "You are the sophisticated and warm Voice Consultant for Ana's Hair Studio. Be elegant, helpful, and concise.",
        }
      });

      sessionRef.current = await sessionPromise;
      
    } catch (err) {
      console.error("Failed to start voice AI:", err);
      setError("Microphone access is required for the Voice Consultant.");
    }
  };

  return (
    <section id="stylist" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Interactive Experience</span>
          <h2 className="text-4xl md:text-6xl mb-6">Voice AI Concierge</h2>
          <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
            Experience the future of beauty consultations. Speak directly with our virtual expert to find your perfect look.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className={`relative w-48 h-48 flex items-center justify-center mb-12`}>
            <div className={`absolute inset-0 border-2 border-[#C5A059]/30 rounded-full transition-transform duration-1000 ${isActive ? 'animate-ping' : ''}`}></div>
            <button 
              onClick={isActive ? stopConversation : startConversation}
              className={`relative z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-500 ${
                isActive ? 'bg-white text-stone-900' : 'bg-[#C5A059] text-white hover:scale-105 shadow-2xl'
              }`}
            >
              {isActive ? (
                <>
                  <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-1 h-4 bg-stone-900 rounded-full ${isSpeaking || isListening ? 'animate-pulse' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">End Chat</span>
                </>
              ) : (
                <>
                  <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Start Advice</span>
                </>
              )}
            </button>
          </div>

          <div className="text-center min-h-[40px]">
            {error ? (
              <p className="text-red-400 text-sm">{error}</p>
            ) : isActive ? (
              <div className="space-y-1">
                <p className="text-[#C5A059] font-medium italic">
                  {isSpeaking ? "Assistant is speaking..." : "Listening..."}
                </p>
              </div>
            ) : (
              <p className="text-stone-500 text-sm italic">Click to begin your vocal consultation</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAIConsultant;
