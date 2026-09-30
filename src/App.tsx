import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Categories from './pages/Categories/Categories'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './pages/Settings/Settings'
import Transactions from './pages/Transactions/Transactions'

import AppNavigation from './components/layout/Navigation/Navigation'

import './App.css'

function App() {
  // Define la estructura principal de navegación y las rutas de la aplicación.
  return (
    <BrowserRouter>
      <AppNavigation />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/settings" element={<Settings />} />

        {/* Redirige cualquier URL desconocida hacia el dashboard. */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
