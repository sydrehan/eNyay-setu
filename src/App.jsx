import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
// 1. IMPORT THE NEW SUCCESS PAGE
import RegistrationSuccessPage from './pages/RegistrationSuccessPage.jsx'; 

function VacantFileCasePage() {
    return (
        <div className="flex h-screen bg-[var(--accent-color)]">
          <div className="w-full flex items-center justify-center"><div className="text-center p-12 bg-white shadow-lg rounded-2xl"><h1 className="text-4xl font-bold font-merriweather text-custom-navy">File a New Case</h1><p className="mt-4 text-lg text-gray-600">This page is currently under construction.</p></div></div>
        </div>
    );
}

function App() {
  const [user, setUser] = useState(null);

  // This is used by LoginPage
  const handleLogin = (role) => {
    setUser({
      name: role === 'user' ? 'Sanjeev Mehra' : 'Adv. Priya Sharma',
      role: role
    });
  };

  const handleLogout = () => setUser(null);

  // 2. THIS IS THE NEW FUNCTION FOR AUTO-LOGIN AFTER REGISTRATION
  const handleRegistrationComplete = (formData) => {
    console.log("Registering and auto-logging in user:", formData.name);
    setUser({
        name: formData.name, // Use the real name from the form!
        role: 'user'         // New registrations are always 'user' role
    });
  };

  return (
    <Routes>
      <Route path="/" element={<div className="flex h-screen bg-[var(--accent-color)]"><Sidebar user={user} onLogout={handleLogout} /><Dashboard user={user} /></div>} />

      {/* 3. Pass the new function to the RegistrationPage route */}
      <Route path="/register" element={<RegistrationPage onRegistrationComplete={handleRegistrationComplete} />} />
      
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/file-a-case" element={ user && user.role === 'user' ? <VacantFileCasePage /> : <Navigate to="/login" /> } />
      
      {/* 4. ADD THE ROUTE FOR THE SUCCESS PAGE */}
      <Route path="/registration-success" element={<RegistrationSuccessPage />} />
    </Routes>
  );
}

export default App;