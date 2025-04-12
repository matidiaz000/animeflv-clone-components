//import '@matidiaz000/animeflv-clone-components/dist/index.css'
import './../lib/index.scss'
import { ViteReactSSG } from 'vite-react-ssg'
import './styles.scss'

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