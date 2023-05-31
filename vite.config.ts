import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
// import mdx from 'vite-plugin-mdx'
import pages from './buildPlugin/dist/node-esm/index.mjs'

export default defineConfig({
  plugins: [
    react(),
    // mdx({
      
    // }),
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
    noExternal: ["mermaid", "mafs", "react-katex"] // "vite-pages-theme-doc"
  }
})
