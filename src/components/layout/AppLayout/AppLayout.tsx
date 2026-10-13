import { Outlet, useLocation } from 'react-router-dom'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

// Asocia cada ruta con el título que debe mostrar el encabezado.
const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/transactions': 'Transacciones',
  '/categories': 'Categorías',
  '/settings': 'Configuración',
}

function AppLayout() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'Dashboard'

  return (
    <>
      <Header title={title} />
      <div className="app-layout">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
