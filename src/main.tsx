import '@matidiaz000/animeflv-clone-components/dist/index.css'
import '@matidiaz000/animeflv-clone-components/dist/animeflv.ttf'
import '@matidiaz000/animeflv-clone-components/dist/animeflv.woff'
import '@matidiaz000/animeflv-clone-components/dist/animeflv.svg'
// import './../lib/index.scss'
// import './../public/animeflv.ttf'
// import './../public/animeflv.woff'
// import './../public/animeflv.svg'
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