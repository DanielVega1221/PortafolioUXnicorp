import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Asegura que JSX funcione correctamente con React 19
      jsxRuntime: 'automatic',
    }),
  ],
  build: {
    // Optimizaciones para producción
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
        },
      },
    },
  },
});
