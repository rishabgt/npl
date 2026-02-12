import React from 'react'

export default function Players() {
  const samplePlayers = ['A. Sharma', 'R. Singh', 'M. Patel', 'S. Khan']
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {samplePlayers.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}
