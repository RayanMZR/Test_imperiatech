import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imperiatec_logo.jpeg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClic = (event) => {
    event.preventDefault();
    console.log('try to connect with:', { email, password });
  };

  return (
    <div className="login-container">
      <a className="login-logo" href="/home">
      <img src={logo} alt="Logo" />
      </a>
      <h2>Log in</h2>
      <form className="login-form" onClic={onClic}>
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