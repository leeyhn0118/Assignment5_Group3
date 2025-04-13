import express from 'express';
import cors from 'cors';
import { summarizeAndAnalyzeArticle } from './generator.js';

const app = express();
const port = 3000; 

app.use(cors()); 

app.get('/summarize', async (req, res) => {
  console.log(`(Server) Received request to /summarize from origin: ${req.headers.origin}`);
  const articleFilePath = './data/article2.txt'; 

  try {
    const summaryResult = await summarizeAndAnalyzeArticle(articleFilePath);
    res.json({ summary: summaryResult });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to generate summary and analysis." });
  }
});

app.listen(port, () => {
  console.log(`Backend server (server.js) listening at http://localhost:${port}`);
  console.log(`API endpoint available at http://localhost:${port}/summarize`);
});