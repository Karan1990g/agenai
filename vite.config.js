import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


 defineConfig({
  assetsInclude: ["**/*.mp4"], // Allow MP4 imports
});


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Ensures correct asset loading on Vercel
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    historyApiFallback: true, // Ensures proper routing in dev mode
  }
});