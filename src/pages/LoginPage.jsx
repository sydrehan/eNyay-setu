import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // The backend returns the full user object (id, name, email, etc.)
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      
      console.log('Login successful! Backend response:', response.data);

      // --- THE FIX ---
      // Pass the entire user object from the backend (response.data) to the onLogin function.
      onLogin(response.data); 
      // --- END OF FIX ---
      
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  const inputStyle = "w-full px-5 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all text-brand-dark placeholder:text-brand-gray";

  return (
    <div className="bg-brand-dark min-h-screen flex items-center justify-center p-4 font-lato">
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-2xl shadow-2xl animate-fadeInUp">
        
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-brand-dark playfair-display">Welcome Back</h1>
            <p className="text-brand-gray mt-2">Sign in to continue to eNyay Setu</p>
        </div>

        <form onSubmit={handleUserLogin} className="space-y-6">
            <div>
                <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="email">
                    Email Address
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="rehan@setu"
                  className={inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="password">
                    Password
                </label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className={inputStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {error && <p className="text-red-500 text-sm text-center bg-red-100 p-3 rounded-lg">{error}</p>}

            <button 
              type="submit" 
              className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent">
                Log In
                <span className="material-icons ml-2">login</span>
            </button>
        </form>

        <div className="text-center mt-8">
            <p className="text-sm text-brand-gray">
                New user?{' '}
                <Link to="/register" className="font-semibold text-brand-secondary hover:text-brand-dark hover:underline">
                    Create an account here
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}