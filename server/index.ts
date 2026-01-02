import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet());
app.use(compression());

const staticPath = path.resolve(__dirname, '..', 'dist', 'public');

app.use(express.static(staticPath));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

export default app;
