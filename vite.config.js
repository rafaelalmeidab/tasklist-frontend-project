import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    cssMinify: process.env.NODE_ENV === 'production',
    outDir: 'dist', // Diretório de saída para arquivos compilados
    rollupOptions: {
      input: {
        main: 'index.html', // Certifique-se de que `index.html` está na raiz
      },
    },
  },
  server: {
    port: 3000, // Porta padrão do servidor de desenvolvimento
    strictPort: true, // Garante que a porta especificada esteja disponível
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
