import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    outDir: 'dist',
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
