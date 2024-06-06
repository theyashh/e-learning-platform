import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        setMessage(response.data.message);
        setPage('home');
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setMessage(error.response.data.message);
        } else {
          setMessage('An error occurred');
        }
      });
  };

  return (
    <div className="auth-page">
      <video autoPlay muted loop id="background-video">
        <source src="/e-learning.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="auth-container">
        <h2>Edu.Path Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
        <button className="register-btn" onClick={() => setPage('register')}>Register Now</button>
      </div>
    </div>
  );
}

export default Login;
