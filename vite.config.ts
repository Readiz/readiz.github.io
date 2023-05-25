import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    react(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
  base: '/',
  server: {
    port: 1523
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./")
    }
  },
  ssr: {
    "noExternal": ["vite-pages-theme-doc", "mafs"]
  }
})
