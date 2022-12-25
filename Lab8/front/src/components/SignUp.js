import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.replace('http://localhost:3000/')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/sign-up', {
      fname: name.split(' ')[0],
      lname: name.split(' ')[1],
      email,
      password: pass,
    })
    console.log(response)
    localStorage.setItem('token', response.token)
    window.location.replace('http://localhost:3000/')
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="full Name"
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <button
        className="link-btn"
        onClick={() => window.location.replace('http://localhost:3000/')}
      >
        Log In
      </button>
    </div>
  )
}
