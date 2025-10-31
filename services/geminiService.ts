
import { GoogleGenAI } from "@google/genai";
import { Article } from '../types';

// This is a MOCK service. In a real application, you would initialize this
// with a valid API key from process.env.API_KEY.
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Simulates calling the Gemini API to summarize an article.
 * @param article The article to summarize.
 * @returns A promise that resolves to an AI-generated summary string.
 */
export const getAiSummary = async (article: Article): Promise<string> => {
  console.log(`Simulating AI summary for: "${article.title}"`);
  
  // Mock prompt for the Gemini API
  const prompt = `Summarize the following sports news article in three concise bullet points, focusing on the key outcome and standout performances:

Article Title: ${article.title}
Content: ${article.content}

Summary:`;

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // This is where the actual API call would be. We are returning a mocked response.
  // try {
  //   const response = await ai.models.generateContent({
  //     model: 'gemini-2.5-flash',
  //     contents: prompt,
  //   });
  //   return response.text;
  // } catch (error) {
  //   console.error("Error fetching AI summary:", error);
  //   return "Sorry, we couldn't generate a summary at this time.";
  // }
  
  // Mocked response based on the article ID
  switch (article.id) {
    case 1:
      return "• Giants defeated the Eagles 24-21.\n• The winning score was a 45-yard field goal as time expired.\n• The victory came after a tense, back-and-forth final quarter.";
    case 2:
      return "• Lakers won against the Celtics with a score of 128-124 in overtime.\n• LeBron James had a stellar performance with 40 points, 10 rebounds, and 9 assists.\n• The Lakers' experience was key in the final minutes of overtime.";
    case 3:
      return "• Max Verstappen won the US Grand Prix in Austin.\n• He dominated the race from pole position, leading from start to finish.\n• This win significantly extends his lead in the world championship standings.";
    default:
      return "• This article discusses the significant impact of technology on modern sports.\n• Key topics include data analytics for strategy and wearable tech for training.\n• The insights are provided by sports scientist Dr. Eva Rostova.";
  }
};
