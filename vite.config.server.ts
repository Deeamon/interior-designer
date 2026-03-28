import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/interior-designer/',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
  },
});
