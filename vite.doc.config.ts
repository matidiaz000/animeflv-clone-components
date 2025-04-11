import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { PluginOption, UserConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
  resolve: {
    alias: {
      fonts: resolve('public/fonts')
    }
  },
  ssgOptions: {
    // It will cause Hydration Failed
    // formatting: 'minify',
    mock: true,
    crittersOptions: false,
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  build: {
    copyPublicDir: false
  }
} as UserConfig)