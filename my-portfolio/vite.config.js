import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures correct path resolution
  server: {
    port: 5173,
    open: true,
  },
});
