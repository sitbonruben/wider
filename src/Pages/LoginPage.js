import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AuthPage.css'; // Common CSS for both Login and Signup pages

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Implement login logic here
      console.log('Login:', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src="/images/logo2.png" alt="Logo" className="absolute top-4 left-4 w-16" />
      <div className="auth-wrapper">
        <div className="auth-container">
          <h1 className="auth-title">Sign In</h1>
          {error && <div className="auth-error">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="auth-input-group">
              <input
                type="email"
                placeholder="Email Address"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-input-group">
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="auth-button">Sign In</button>
          </form>
          <div className="auth-links">
            <Link to="/signup" className="auth-link">Don't have an account? Sign Up</Link>
            <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <Link to="/" className="absolute bottom-4 left-4 text-blue-600 text-sm hover:underline">Back to Home</Link>
    </div>
  );
};

export default LoginPage;
