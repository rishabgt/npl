import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    team: '',
    position: '',
    battingStyle: '',
    bowlingStyle: ''
  })
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleFile(e) {
    const f = e.target.files && e.target.files[0]
    if (f) {
      setFile(f)
      const url = URL.createObjectURL(f)
      setPreview(url)
    } else {
      setFile(null)
      setPreview(null)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      if (file) fd.append('photo', file)

      // POST to backend endpoint - implement server to accept this
      const res = await fetch('/api/players', {
        method: 'POST',
        body: fd
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Failed to submit')
      }

      // success
      alert('Registration submitted successfully')
      navigate('/players')
    } catch (err) {
      console.error(err)
      alert('Error submitting registration: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Player Registration</h1>
      <form className="reg-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{display:'flex',gap:16}}>
          <div style={{flex:1}}>
            <div className="field">
              <label>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Age</label>
              <input name="age" type="number" value={form.age} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Address</label>
              <input name="address" value={form.address} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Team</label>
              <input name="team" value={form.team} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Position</label>
              <input name="position" value={form.position} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Batting Style</label>
              <input name="battingStyle" value={form.battingStyle} onChange={handleChange} />
            </div>
            <div className="field">
              <label>Bowling Style</label>
              <input name="bowlingStyle" value={form.bowlingStyle} onChange={handleChange} />
            </div>
          </div>
          <div style={{width:200}}>
            <div className="field">
              <label>Player Photo</label>
              <input type="file" accept="image/*" onChange={handleFile} />
            </div>
            {preview ? (
              <div style={{marginTop:8}}>
                <img src={preview} alt="preview" style={{width:'100%',borderRadius:8}} />
              </div>
            ) : (
              <div style={{marginTop:8,color:'#777'}}>No photo selected</div>
            )}
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Registration'}</button>
        </div>
      </form>
    </div>
  )
}
