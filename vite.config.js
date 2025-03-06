import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures correct asset loading on Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    historyApiFallback: true, // Ensures proper routing in dev mode
  }
});