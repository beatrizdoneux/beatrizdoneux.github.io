import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/beatrizdoneux.github.io/',
  build: {
    outDir: 'docs',  // important for GitHub Pages deployment from main/docs
  },
})
