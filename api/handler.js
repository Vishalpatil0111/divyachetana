import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let serverModule = null;

async function getServer() {
  if (!serverModule) {
    try {
      const serverPath = path.join(__dirname, '../dist/server/server.js');
      serverModule = await import(serverPath);
      console.log('Server module loaded:', !!serverModule.default);
    } catch (e) {
      console.error('Failed to load server module:', e);
      throw e;
    }
  }
  return serverModule;
}

const mimeTypes = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

function getMimeType(pathname) {
  const ext = path.extname(pathname).toLowerCase();
  return mimeTypes[ext] || 'text/plain';
}

async function serveStatic(pathname) {
  try {
    const filePath = path.resolve(process.cwd(), 'dist/client', pathname.slice(1));
    const clientDir = path.resolve(process.cwd(), 'dist/client');
    
    if (!filePath.startsWith(clientDir)) {
      return null;
    }

    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath);
    }
  } catch (e) {
    console.error('Static file error:', e.message);
  }
  return null;
}

export default async (req, res) => {
  try {
    console.log('Handler called:', req.method, req.url);
    
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    const pathname = url.pathname;

    // Try to serve static files
    if (
      pathname.startsWith('/assets/') ||
      pathname.startsWith('/images/') ||
      pathname === '/divyachetana-logo.png' ||
      (pathname.includes('.') && pathname.split('/').pop().includes('.'))
    ) {
      console.log('Attempting to serve static file:', pathname);
      const staticContent = await serveStatic(pathname);
      if (staticContent) {
        res.setHeader('Content-Type', getMimeType(pathname));
        if (pathname.startsWith('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (pathname.startsWith('/images/')) {
          res.setHeader('Cache-Control', 'public, max-age=86400');
        }
        res.write(staticContent);
        res.end();
        return;
      }
    }

    console.log('Routing to SSR handler for:', pathname);
    
    // Route SSR requests through the server
    const server = await getServer();
    const handler = server.default;

    if (!handler) {
      throw new Error('No default export found in server module');
    }

    // Build request URL
    const method = req.method || 'GET';
    const requestUrl = new URL(pathname, `http://${req.headers.host || 'localhost'}`);
    
    // Build request body
    let body = undefined;
    if (method !== 'GET' && method !== 'HEAD') {
      if (typeof req.body === 'string') {
        body = req.body;
      } else if (req.body) {
        body = JSON.stringify(req.body);
      }
    }

    // Create Fetch API Request
    const fetchRequest = new Request(requestUrl, {
      method,
      headers: req.headers,
      body,
    });

    // Call Cloudflare handler
    const fetchResponse = await handler.fetch(fetchRequest, {}, {});

    // Send response
    res.statusCode = fetchResponse.status;
    fetchResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const responseBody = await fetchResponse.arrayBuffer();
    res.write(Buffer.from(responseBody));
    res.end();
  } catch (error) {
    console.error('Handler error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>500 Internal Server Error</h1><p>' + error.message + '</p>');
  }
};
