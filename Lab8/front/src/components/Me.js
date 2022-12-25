import { useEffect, useState } from 'react'
import axios from '../api/axios'

export const Me = () => {
  const [user, setUser] = useState({})
  const fetchUser = async (token) => {
    const response = await axios.get('/me', {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
    setUser(response.data);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.replace('http://localhost:3000');
    } else {
      fetchUser(token);
    }
    
  }, [])

  return (
    <div className="auth-form-container">
      <h2>Hello</h2>
      <h2>{user.fname} {user.lname}</h2>
    </div>
  )
}
