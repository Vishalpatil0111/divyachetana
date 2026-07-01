import { readFile } from 'fs/promises';
import { resolve } from 'path';

let serverModule: any = null;

async function getServer() {
  if (!serverModule) {
    try {
      // Import the built server - adjust path based on deployment structure
      serverModule = await import('../dist/server/server.js');
    } catch (e) {
      console.error('Failed to load server module:', e);
      throw e;
    }
  }
  return serverModule;
}

// Serve static files from dist/client
async function serveStatic(pathname: string): Promise<Buffer | null> {
  try {
    const filePath = resolve(process.cwd(), 'dist/client', pathname.slice(1));
    // Security: prevent directory traversal
    if (!filePath.startsWith(resolve(process.cwd(), 'dist/client'))) {
      return null;
    }
    return await readFile(filePath);
  } catch (e) {
    return null;
  }
}

function getMimeType(pathname: string): string {
  if (pathname.endsWith('.js')) return 'application/javascript';
  if (pathname.endsWith('.css')) return 'text/css';
  if (pathname.endsWith('.json')) return 'application/json';
  if (pathname.endsWith('.png')) return 'image/png';
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg';
  if (pathname.endsWith('.gif')) return 'image/gif';
  if (pathname.endsWith('.svg')) return 'image/svg+xml';
  if (pathname.endsWith('.webp')) return 'image/webp';
  if (pathname.endsWith('.woff')) return 'font/woff';
  if (pathname.endsWith('.woff2')) return 'font/woff2';
  if (pathname.endsWith('.ttf')) return 'font/ttf';
  if (pathname.endsWith('.eot')) return 'application/vnd.ms-fontobject';
  return 'text/plain';
}

export default async (req: any, res: any) => {
  try {
    const pathname = new URL(req.url || '/', `http://${req.headers.host}`).pathname;

    // Try to serve static files from dist/client for assets
    if (
      pathname.startsWith('/assets/') ||
      pathname.includes('.') && !pathname.includes('/') ||
      pathname === '/divyachetana-logo.png'
    ) {
      const staticContent = await serveStatic(pathname);
      if (staticContent) {
        res.setHeader('Content-Type', getMimeType(pathname));
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.write(staticContent);
        res.end();
        return;
      }
    }

    // For image files in the images directory
    if (pathname.startsWith('/images/')) {
      const staticContent = await serveStatic(pathname);
      if (staticContent) {
        res.setHeader('Content-Type', getMimeType(pathname));
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.write(staticContent);
        res.end();
        return;
      }
    }

    // Route all other requests through the SSR server
    const server = await getServer();
    const handler = server.default;

    // Convert Vercel request to Fetch API Request
    const method = req.method || 'GET';
    const url = new URL(pathname, `http://${req.headers.host || 'localhost'}`);
    
    let body: string | undefined;
    if (method !== 'GET' && method !== 'HEAD' && req.body) {
      if (typeof req.body === 'string') {
        body = req.body;
      } else {
        body = JSON.stringify(req.body);
      }
    }

    const fetchRequest = new Request(url, {
      method,
      headers: req.headers as Record<string, string>,
      body,
    });

    // Call the Cloudflare handler
    const fetchResponse = await handler.fetch(fetchRequest, {}, {});

    // Convert Fetch Response to Vercel response
    res.statusCode = fetchResponse.status;
    fetchResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const responseBody = await fetchResponse.arrayBuffer();
    res.write(Buffer.from(responseBody));
    res.end();
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).end('Internal Server Error');
  }
};
