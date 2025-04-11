// import '@matidiaz000/animeflv-clone-components/index.scss'
import './../lib/index.scss'
import './../public/animeflv.ttf'
import './../public/animeflv.woff'
import './../public/animeflv.svg'
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