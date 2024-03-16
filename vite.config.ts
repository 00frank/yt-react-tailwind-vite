import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils/index.ts'),
      '@types': path.resolve(__dirname, './src/types/types.d.ts'),
      '@socket': path.resolve(__dirname, './src/socket/socket.ts'),
    }
  },
  plugins: [react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'es-ES',
        name: 'Youtube Clone',
        short_name: 'YT Clone',
        description: 'Aplicacion clon de youtube hecha con react + tailwind + vite',
        theme_color: '#18181b',
        background_color: '#18181b',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ]
      }
    })
  ]
})
