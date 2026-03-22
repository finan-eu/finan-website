// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { cspString, securityHeaders as headers } from './security.config.js';

// Custom Vite plugin to set security headers
/** @returns {any} */
function securityHeaders() {
  return {
    name: 'security-headers',
    /** @param {any} server */
    configureServer(server) {
      server.middlewares.use(
        /**
         * @param {any} _req
         * @param {any} res
         * @param {() => void} next
         */
        (_req, res, next) => {
          // Set CSP from centralized config
          res.setHeader('Content-Security-Policy', cspString);

          // Set other security headers from centralized config
          Object.entries(headers).forEach(([header, value]) => {
            res.setHeader(header, value);
          });

          next();
        }
      );
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://finan.eu.com',
  integrations: [],
  build: {
    inlineStylesheets: 'always',
  },
  security: {
    checkOrigin: true,
  },
  vite: {
    plugins: [/** @type {any} */ (tailwindcss()), securityHeaders()],
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
