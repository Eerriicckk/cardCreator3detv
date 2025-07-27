import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cardCreator3detv",
  server: {
    host: true,
    origin: "http://0.0.0.0:8080",
    strictPort: true,
    port: 5174
  },
  preview: {
    port: 5174,
    host: true,
    strictPort: true,
  }
})
