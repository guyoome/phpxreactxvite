import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/main.jsx'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: `assets/[name].[ext]`
      }
    },
    watch: true
  }
})