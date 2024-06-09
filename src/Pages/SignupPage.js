import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AuthPage.css'; // Common CSS for both Login and Signup pages

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Implement signup logic here
      console.log('Signup:', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <img src="/images/logo2.png" alt="Logo" className="absolute top-4 left-4 w-16" />
      <div className="auth-wrapper">
        <div className="auth-container">
          <h1 className="auth-title">Sign Up</h1>
          {error && <div className="auth-error">{error}</div>}
          <form onSubmit={handleSignup}>
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
            <div className="auth-input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <div className="auth-links">
            <Link to="/login" className="auth-link">Have an account? Sign In</Link>
          </div>
        </div>
      </div>
      <Link to="/" className="absolute bottom-4 left-4 text-blue-600 text-sm hover:underline">Back to Home</Link>
    </div>
  );
};

export default SignupPage;
