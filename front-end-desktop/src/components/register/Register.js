import React, { useState } from 'react';
import logo from '../../assets/imperiatec_logo.jpeg';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClic = (event) => {
    event.preventDefault();
    console.log('try to connect with:', { email, password });
  };

  return (
    <div className="register-container">
      <a className="register-logo" href="/home">
      <img src={logo} alt="Logo" />
      </a>
      <h2>Sign up</h2>
      <form className="register-form" onClic={onClic}>
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