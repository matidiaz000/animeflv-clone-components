// import '@matidiaz000/animeflv-clone-components/styles.css'
import '../lib/styles.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)
