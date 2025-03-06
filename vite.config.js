import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000, // Used in development (optional)
  },
  preview: {
    port: 10000, // Ensure Render uses a fixed port
    host: true,  // Bind to all network interfaces
  }
});
