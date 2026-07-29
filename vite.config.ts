import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'save-json-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/save-content') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const { filename, data } = JSON.parse(body);
                const safeName = path.basename(filename);
                const filePath = path.resolve('src/content', safeName);
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              } catch (err: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
});
