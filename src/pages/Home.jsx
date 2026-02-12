import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Highlights from '../components/Highlights'

export default function Home() {
  return (
    <div>
      <Carousel />
      <section style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Highlights & Registration</h2>
          <Link to="/register" className="btn-register">Register as Player</Link>
        </div>
        <Highlights />
      </section>
    </div>
  )
}
