import React from 'react'

export default function Teams() {
  const sampleTeams = ['Strikers', 'Warriors', 'Riders', 'Titans']
  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {sampleTeams.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
