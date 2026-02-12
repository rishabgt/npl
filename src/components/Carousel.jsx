import React, { useEffect, useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c5f2b7f7a6f8b0b3b9da4c9d4c1b1e2',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e6b0a8c1b7a1bca5d5b9a04e6d1b2ef',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7b1b7c2a3b1c4d5e6f7a8b9c0d1e2f'
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="carousel">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`slide-${i}`}
          className={`slide ${i === index ? 'active' : ''}`}
        />
      ))}
      <div className="carousel-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
