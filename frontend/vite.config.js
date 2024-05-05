import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Configure fallback behavior
    // Serve index.html for all non-root routes
    proxy: {
      // This captures requests that are not for API routes (starting with '/api')
      // and serves index.html instead
      '/': {
        target: '/index.html',
        changeOrigin: true,
        rewrite: (path) => path !== '/' ? '/index.html' : '/',
      },
    },
  },
});
