import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/imperiatec_logo.jpeg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = { email, password };

    try {
      const response = await fetch('http://localhost:8000/api/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'error connecting');
      }
    } catch (err) {
      console.error('connection failed', err);
      setError('connection failed.');
    }
  };

  return (
    <div className="login-container">
      <a className="login-logo" href="/home">
        <img src={logo} alt="Logo" />
      </a>
      <h2>Log in</h2>
      {error && <p className="error">{error}</p>}
      <form className="login-form" onSubmit={onSubmit}>
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
        <button type="submit" className="btn-login">Log in</button>
        <div className="login-prompt">
          New to ImperiatecDoc ? <Link to="/register">Sign up here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
