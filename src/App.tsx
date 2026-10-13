import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from './components/layout/AppLayout/AppLayout'
import Categories from './pages/Categories/Categories'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './pages/Settings/Settings'
import Transactions from './pages/Transactions/Transactions'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Redirige cualquier URL desconocida hacia el dashboard. */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
