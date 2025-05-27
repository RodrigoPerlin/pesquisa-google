import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Google from './pages/google'
import FormPost from './pages/form-post'
import FormPost2 from './pages/form-post2'

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/google" />} />
        <Route path="/google" element={<Google />} />
        <Route path="/form" element={<FormPost />} />
        <Route path="form/form2" element={<FormPost2 />} />
        <Route path="form/form2/:id" element={<Google />} />

        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}
