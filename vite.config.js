import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['1bedd1945290.ngrok-free.app'],
  },
  base: '/krushnal_portfolio/', 
})
