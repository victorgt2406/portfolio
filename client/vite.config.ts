import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0" // Listens on all local IPs. Replace `true` with your actual IP if needed.
  },
  base: process.env.NODE_ENV !== 'production' ? "/" : "/portfolio/"
})
