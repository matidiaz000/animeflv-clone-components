// import '@matidiaz000/animeflv-clone-components/styles.css'
import '../lib/styles.scss'
import { ViteReactSSG } from 'vite-react-ssg'

import { routes } from './App.tsx'

export const createRoot = ViteReactSSG(
  {
    routes,
    future: {
      v7_relativeSplatPath: true
    }
  },
  () => { },
)