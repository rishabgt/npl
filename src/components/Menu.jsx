import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <header className="site-header">
      <div className="brand">Cricket Premiere League</div>
      <nav>
        <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
        <NavLink to="/teams" className={({isActive})=> isActive? 'active' : ''}>Teams</NavLink>
        <NavLink to="/players" className={({isActive})=> isActive? 'active' : ''}>Players</NavLink>
      </nav>
    </header>
  )
}
