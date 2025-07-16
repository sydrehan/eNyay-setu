// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  // This simulates a successful login. We pass the 'user' role.
  const handleUserLogin = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log("Simulating User Login...");
    onLogin('user');
    navigate('/');
  };

  const handleArbitratorLogin = (e) => {
    e.preventDefault();
    console.log("Simulating Arbitrator Login...");
    onLogin('arbitrator');
    navigate('/');
  };


  return (
    <div className="bg-custom-gray min-h-screen flex items-center justify-center p-4 font-lato">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
        <div className="text-center mb-8">
            <span className="material-icons text-5xl text-custom-navy">gavel</span>
            <h1 className="text-3xl font-bold font-merriweather text-custom-navy mt-2">eNyay Setu Login</h1>
        </div>

        {/* We can have separate forms or logic later, for now we simulate with one form */}
        <form onSubmit={handleUserLogin} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email Address
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input id="password" name="password" type="password" required placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold"/>
            </div>

            <button type="submit" className="w-full bg-custom-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center">
                Log In
                <span className="material-icons ml-2">login</span>
            </button>
        </form>

        <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
                New user?{' '}
                <Link to="/register" className="font-semibold text-custom-navy hover:underline">
                    Create an account here
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}