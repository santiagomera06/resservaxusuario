import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    if (!email || !password) {
      setError('Email y contraseña son requeridos');
      return;
    }
    
    try {
      const res = await axios.post('http://localhost:3307/api/login', {
        email,
        password
      });
      
     
      localStorage.setItem('token', res.data.token);
      navigate('/');
      
    } catch {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;