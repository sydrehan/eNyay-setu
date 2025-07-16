// src/pages/RegistrationSuccessPage.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RegistrationSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the user's name passed from the registration page. Fallback to "Welcome!"
  const userName = location.state?.userName || "Welcome";

  // This effect runs once when the component loads
  useEffect(() => {
    // Set a timer to redirect to the dashboard after 3.5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3500);

    // Clean up the timer if the user navigates away early
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-custom-gray font-lato min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-xl border border-gray-200 text-center">
        <div className="flex justify-center mb-6">
            <span className="material-icons text-7xl text-green-600">check_circle</span>
        </div>
        <h1 className="text-3xl font-bold font-merriweather text-custom-navy">
          Registration Successful!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Thank you for joining, <span className="font-bold">{userName}</span>.
        </p>
        <p className="text-md text-gray-500 mt-2">
          You are now logged in. We will redirect you to the dashboard shortly.
        </p>
      </div>
    </div>
  );
}