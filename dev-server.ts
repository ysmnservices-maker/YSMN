import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load local env (optional)
dotenv.config({ path: '.env.local' });
dotenv.config();

// Lazy ESM imports for serverless handlers (avoid require in ESM)
const loadContactHandler = async () => (await import('./api/contact')).default as (req: any, res: any) => Promise<void>;
const loadCareersHandler = async () => (await import('./api/careers')).default as (req: any, res: any) => Promise<void>;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  try {
    const handler = await loadContactHandler();
    await handler(req as any, res as any);
  } catch (err) {
    console.error('Dev API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/careers', async (req, res) => {
  try {
    const handler = await loadCareersHandler();
    await handler(req as any, res as any);
  } catch (err) {
    console.error('Dev API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = Number(process.env.API_PORT || 3001);
app.listen(port, () => {
  console.log(`Dev API server running at http://localhost:${port}`);
});


