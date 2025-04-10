import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import type { PluginOption, UserConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
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
      'This-Is-A-Custom-Header': 'yes',
    },
  },
} as UserConfig)