// app/login/page.js

"use client";  // Mark this as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';  // For internal routing

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => password.length >= 8;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email address.');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (!acceptTerms) {
      setError('You must accept the terms and conditions.');
      return;
    }

    // Redirect to dashboard with email query parameter
    router.push(`/dashboard?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            required
          />
          <label>I accept the terms and conditions</label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        <Link href="/sign-up">Sign up</Link> | 
        <Link href="/sign-up#sign-up-again">Forgot password?</Link>
      </p>
    </div>
  );
}
