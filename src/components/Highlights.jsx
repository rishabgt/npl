import React, { useState } from 'react'

export default function Highlights() {
  const [form, setForm] = useState({ name: '', email: '', team: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Registered: ${form.name} (${form.email}) for ${form.team || 'N/A'}`)
    setForm({ name: '', email: '', team: '' })
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Favourite Team</label>
        <select name="team" value={form.team} onChange={handleChange}>
          <option value="">-- choose --</option>
          <option value="Strikers">Strikers</option>
          <option value="Warriors">Warriors</option>
          <option value="Riders">Riders</option>
          <option value="Titans">Titans</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
