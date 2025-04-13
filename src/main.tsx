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