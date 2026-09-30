import { StrictMode } from 'react' // stricmode: ayuda con la deteccion de errores y efectos
import { createRoot } from 'react-dom/client' // createroot: crea la raiz  de la app en react
import './index.css' // hace que vite procese el archivo
import App from './App.tsx' // da inico a la app

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
