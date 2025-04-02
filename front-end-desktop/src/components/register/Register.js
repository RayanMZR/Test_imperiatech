import React, { useState } from 'react';
import logo from '../../assets/imperiatec_logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = { username, email, password };

    try {
      const response = await fetch('http://localhost:8000/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error');
      }
    } catch (err) {
      console.error('Registration failed', err);
      setError('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <a className="register-logo" href="/home">
      <img src={logo} alt="Logo" />
      </a>
      <h2>Sign up</h2>
      <form className="register-form" onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn-register">Get started</button>
        <div className="register-prompt">
        Already on ImperiatecDoc ? <Link to="/login">Log in here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;