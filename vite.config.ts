import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/kamazuni-marunomi.github.io/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
