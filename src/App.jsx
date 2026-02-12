import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Players from './pages/Players'
import Register from './pages/Register'

export default function App() {
  return (
    <div className="app">
      <Menu />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}
