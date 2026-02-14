
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHairConsultation = async (userInput: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert high-end hair consultant at Ana's Hair Studio. 
      The user is asking for advice: "${userInput}". 
      Respond as a professional, stylish, and friendly stylist. 
      Suggest specific services from: Designer Cut, Balayage, Single Process Color, Signature Blowout, or Keratin Smoothing. 
      Keep it concise and elegant.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my creative inspiration right now. Please feel free to call us at (555) 123-4567 for a direct consultation!";
  }
};
