import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This tells Vite: "If I ask for /api, send the request to localhost:3000"
      '/api': {
        target: 'https://url-shortener-yfup.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
 