import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (!email.endsWith('@gmail.com')) {
      setMessage('Wrong Email address');
      return;
    }

    axios.post('http://localhost:5000/register', { email, password })
      .then(response => {
        setMessage(response.data.message);
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
        <h2>Edu.Path Register</h2>
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
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={e => setConfirmPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Register</button>
        <p>{message}</p>
        <button className="login-btn" onClick={() => setPage('login')}>Login</button>
      </div>
    </div>
  );
}

export default Register;
