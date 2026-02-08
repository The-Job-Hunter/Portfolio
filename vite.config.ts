import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Matches the repository name for correct routing on GitHub Pages
  base: '/jonathanProtfolio/', 
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})