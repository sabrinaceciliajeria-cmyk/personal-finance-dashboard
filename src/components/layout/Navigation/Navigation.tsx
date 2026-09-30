import { NavLink } from 'react-router-dom'

function Navigation() {
  // Contiene los enlaces principales para navegar entre las páginas de la aplicación.
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/transactions">Transacciones</NavLink>
      <NavLink to="/categories">Categorías</NavLink>
      <NavLink to="/settings">Configuración</NavLink>
    </nav>
  )
}

export default Navigation
