import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig((env) => ({
  define: env.command === 'build' ? { "process.env.NODE_ENV":  "'production'" } : undefined,
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'], rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.tsx'),
      name: 'animeflv-clone-components',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'animeflv-clone-components',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js',
        interop: 'auto',
        preserveModules: true,
        format: 'esm',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
}))