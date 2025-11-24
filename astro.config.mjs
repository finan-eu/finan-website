// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { cspString, securityHeaders as headers } from './security.config.js';

// Custom Vite plugin to set security headers
function securityHeaders() {
  return {
    name: 'security-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Set CSP from centralized config
        res.setHeader('Content-Security-Policy', cspString);

        // Set other security headers from centralized config
        Object.entries(headers).forEach(([header, value]) => {
          res.setHeader(header, value);
        });

        next();
      });
    },
  };
}

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
  },
  security: {
    checkOrigin: true,
  },
  vite: {
    plugins: [tailwindcss(), securityHeaders()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
});
