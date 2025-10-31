
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
      return "• Jaqueline, bicampeã olímpica, está de volta às quadras.\n• Ela assinou com um novo clube para a próxima temporada da Superliga.\n• Aos 38 anos, sua experiência é vista como um grande trunfo para a equipe.";
    case 3:
      return "• Felix Auger-Aliassime venceu Valentin Vacherot em Paris.\n• A vitória por duplo 6/2 o colocou nas semifinais do Masters 1000.\n• O resultado mantém o canadense na disputa por uma vaga nas ATP Finals.";
    case 4:
      return "• Este podcast discute o impacto da tecnologia nos esportes modernos.\n• Os tópicos principais incluem análise de dados para estratégia e tecnologia vestível para treinamento.\n• As informações são fornecidas pela cientista esportiva Dra. Eva Rostova.";
    