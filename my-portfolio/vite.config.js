import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use '/' for Netlify (or './' for GitHub Pages)
  build: {
    outDir: 'dist',  // Ensures the correct build output directory
    sourcemap: true,  // Helps debugging production issues
  },
  server: {
    port: 5173,
    open: true,
  },
});
