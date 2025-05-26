import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Google from './pages/google'
import FormPost from './pages/form-post'

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/google" />} />
        <Route path="/google" element={<Google />} />
        <Route path="/form" element={<FormPost />} />

        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}
