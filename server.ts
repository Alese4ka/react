import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      await render(url, { req, res });
    } catch (err) {
      if (err instanceof Error) vite.ssrFixStacktrace(err);
      console.log(err);
    }
  });

  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Starting on http://localhost:${PORT}/`);
  });
}

createServer();