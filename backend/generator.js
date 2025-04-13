import dotenv from 'dotenv';
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import natural from 'natural';
import { TextLoader } from "langchain/document_loaders/fs/text";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ],
});

const tokenizer = new natural.WordTokenizer();

async function loadArticleText() {
    const loader = new TextLoader("./data/article2.txt");
    const docs = await loader.load();
    const articleText = docs.map(doc => doc.pageContent).join("\n\n");
    console.log(`Loaded ${articleText.length} characters.`);
    return articleText;
}
export async function summarizeAndAnalyzeArticle(filePath) {
  console.log(`(Logic) Starting summarization for: ${filePath}`);
  const articleText = await loadArticleText(filePath);
  if (!articleText) {
    throw new Error("(Logic) Failed to load article text or file is empty.");
  }
  const prompt = `Please provide a comprehensive 450 words summary and analysis of the following article text.
  The summary should cover the main points and key information accurately.
  The analysis should explore the motivations behind the actions described, the potential impacts or implications, and any broader context or significance.

  Article Text:
  ---
  ${articleText}
  ---

  Summary and Analysis:`;

  console.log("(Logic) Invoking Gemini model...");
  const response = await model.invoke(prompt);
  console.log("(Logic) Received response from Gemini.");
  return response.content;
}