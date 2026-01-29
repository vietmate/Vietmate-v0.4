import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
  // Replaces process.env.API_KEY in client code with the string value from build environment
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});