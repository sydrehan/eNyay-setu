import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Smartly read data from the navigation state
  const { type, userName } = location.state || { type: 'default' };

  // Set up different messages based on the 'type' of success
  let config = {
      title: 'Success!',
      message: 'Your action was completed.',
      icon: 'check_circle',
      iconColor: 'text-green-600',
      autoRedirect: false,
  };

  if (type === 'userRegistration') {
    config = {
      title: 'Registration Successful!',
      message: `Thank you for joining, ${userName}. You will be redirected to the dashboard shortly.`,
      icon: 'check_circle',
      iconColor: 'text-green-600',
      autoRedirect: true, // Auto-redirect for users
    };
  } else if (type === 'arbitratorRegistration') {
    config = {
      title: 'Registration Submitted!',
      message: 'You will be notified once the details are verified.',
      icon: 'verified_user',
      iconColor: 'text-blue-600',
      autoRedirect: false, // No auto-redirect for arbitrators
    };
  }

  // Effect for auto-redirecting ONLY if enabled
  useEffect(() => {
    if (config.autoRedirect) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [navigate, config.autoRedirect]);

  return (
    <div className="bg-brand-dark min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg p-12 rounded-2xl shadow-2xl text-center animate-fadeInUp">
        <div className="flex justify-center mb-6">
            <span className={`material-icons text-7xl ${config.iconColor}`}>{config.icon}</span>
        </div>
        <h1 className="text-3xl font-bold playfair-display text-brand-dark">
          {config.title}
        </h1>
        <p className="text-lg text-brand-gray mt-4">
          {config.message}
        </p>
        {!config.autoRedirect && (
          <Link to="/" className="inline-block mt-8 py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 font-semibold transition-colors">
              Back to Home
          </Link>
        )}
      </div>
    </div>
  );
}