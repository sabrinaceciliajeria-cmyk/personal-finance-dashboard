import react from '@vitejs/plugin-react' //Importa el plugin de React para Vite " este proyecto usa react "
import { defineConfig } from 'vite' // nos ayuda a declarar  la configuracion del vite  para que typeScript pueda entenderlo  y no marque errores

// https://vite.dev/config/
export default defineConfig({
  // tiene una confi, que otros sistemas pueden usar
  plugins: [react()], // utiliza pluggin del react
})
