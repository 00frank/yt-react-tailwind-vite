import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@utils': path.resolve(__dirname, './src/utils/index.ts'),
      '@types': path.resolve(__dirname, './src/types/types.d.ts'),
      '@socket': path.resolve(__dirname, './src/socket/socket.ts'),
    }
  }
})
