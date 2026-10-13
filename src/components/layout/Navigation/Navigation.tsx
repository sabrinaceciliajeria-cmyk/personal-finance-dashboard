import { NavLink } from 'react-router-dom'

// Contiene los enlaces principales para navegar entre las páginas de la aplicación.
function Navigation() {
  return (
    <nav aria-label="Navegación principal">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/transactions"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Transacciones
      </NavLink>

      <NavLink
        to="/categories"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Categorías
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Configuración
      </NavLink>
    </nav>
  )
}

export default Navigation
