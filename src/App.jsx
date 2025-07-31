import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ArbitratorRegistrationPage from './pages/ArbitratorRegistrationPage';
import FindArbitratorPage from './pages/FindArbitratorPage'; // Corrected Path
import CaseHistoryPage from './pages/CaseHistoryPage';
import RegistrationSuccessPage from './pages/RegistrationSuccessPage';
import ArbitratorSuccessPage from './pages/ArbitratorSuccessPage';
import CaseSuccessPage from './pages/CaseSuccessPage';

// Bringing FileCasePage logic inside App.jsx to prevent import issues
import Step1_PartyDetails from './components/FileCase/Step1_PartyDetails';
import Step2_DisputeType from './components/FileCase/Step2_DisputeType';
import Step3_CaseDetails from './components/FileCase/Step3_CaseDetails';
import Step4_ArbitratorExpertise from './components/FileCase/Step4_ArbitratorExpertise';

function FileCasePage({ onCaseFiled, user }) {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    
    // Logic for FileCasePage
    const handleNext = () => setCurrentStep(p => p < 4 ? p + 1 : p);
    const handleBack = () => setCurrentStep(p => p > 1 ? p - 1 : p);
    const handleComplete = () => { /* ... */ };
    const updateFormData = (field, value) => setFormData(prev => ({...prev, [field]: value}));

    return (
        <div className="flex h-screen bg-brand-secondary">
            <Sidebar user={user} />
            <div className="flex-1 flex flex-col p-4 md:p-8 overflow-y-auto">
                <main className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex-grow flex flex-col">
                    <div className="flex-grow p-8">
                        {currentStep === 1 && <Step1_PartyDetails updateFormData={updateFormData} />}
                        {currentStep === 2 && <Step2_DisputeType updateFormData={updateFormData} />}
                        {currentStep === 3 && <Step3_CaseDetails updateFormData={updateFormData} />}
                        {currentStep === 4 && <Step4_ArbitratorExpertise updateFormData={updateFormData} />}
                    </div>
                    <footer className="p-6 border-t flex justify-between">
                        <button onClick={handleBack} disabled={currentStep === 1} className="py-2 px-6 rounded-lg ...">Back</button>
                        {currentStep < 4 ? (<button onClick={handleNext}>Next</button>) : (<button onClick={handleComplete}>Complete</button>)}
                    </footer>
                </main>
            </div>
        </div>
    );
}


function App() {
  const [user, setUser] = useState(null);
  const [arbitrators, setArbitrators] = useState(() => JSON.parse(localStorage.getItem('arbitrators')) || []);
  const [cases, setCases] = useState(() => JSON.parse(localStorage.getItem('cases')) || []);
  
  useEffect(() => { localStorage.setItem('arbitrators', JSON.stringify(arbitrators)); }, [arbitrators]);
  useEffect(() => { localStorage.setItem('cases', JSON.stringify(cases)); }, [cases]);
  
  const handleLogin = (userObject) => setUser({ name: userObject.name, role: userObject.role || 'user' });
  const handleLogout = () => setUser(null);
  const handleRegistrationComplete = (formData) => setUser({ name: formData.name, role: 'user' });
  const handleArbitratorRegistration = (newData) => setArbitrators(prev => [...prev, { id: Date.now(), ...newData }]);
  const handleCaseFiled = (newCaseData) => setCases(prev => [...prev, newCaseData]);

  return (
    <Routes>
      {/* 1. Main Dashboard Route */}
      <Route path="/" element={
          <div className="flex h-screen bg-brand-dark">
              <Sidebar user={user} onLogout={handleLogout} />
              <Dashboard user={user} />
          </div>
      } />
      
      {/* 2. Standalone Routes (No Sidebar) */}
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegistrationPage onRegistrationComplete={handleRegistrationComplete} />} />
      <Route path="/register-arbitrator" element={<ArbitratorRegistrationPage onComplete={handleArbitratorRegistration} />} />
      <Route path="/registration-success" element={<RegistrationSuccessPage />} />
      <Route path="/arbitrator-registration-success" element={<ArbitratorSuccessPage />} />
      <Route path="/case-filed-success" element={<CaseSuccessPage />} />
      
      {/* --- 3. Protected Routes (Must be logged in) --- */}
      
      {/* Find Arbitrator */}
      <Route path="/find-arbitrator" element={ user ? 
        (<div className="flex h-screen bg-brand-dark">
            <Sidebar user={user} onLogout={handleLogout} />
            <FindArbitratorPage arbitrators={arbitrators} />
         </div>) : 
        (<Navigate to="/login" />)
      }/>

      {/* Case History */}
      <Route path="/history" element={ user ? 
        (<div className="flex h-screen bg-brand-dark">
            <Sidebar user={user} onLogout={handleLogout} />
            <CaseHistoryPage cases={cases} />
         </div>) : 
        (<Navigate to="/login" />)
      }/>
      
      {/* File a Case */}
      <Route path="/file-a-case" element={ user ? 
        <FileCasePage onCaseFiled={handleCaseFiled} user={user} /> : 
        <Navigate to="/login" />
      }/>
    </Routes>
  );
}

export default App;