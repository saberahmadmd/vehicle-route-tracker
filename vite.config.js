import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindConfig from './tailwind.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindConfig],
  server: {
    port: 3000,
    open: true // Automatically open browser
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})