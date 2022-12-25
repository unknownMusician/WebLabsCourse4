import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.replace('http://localhost:3000/me')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/sign-in', {
      email,
      password: pass,
    })

    localStorage.setItem('token', response.data.token);
    window.location.replace('http://localhost:3000/me')
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => window.location.replace('http://localhost:3000/sign-up')}
      >
        Register
      </button>
    </div>
  )
}
