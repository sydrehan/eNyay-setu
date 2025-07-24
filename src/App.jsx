import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';

// Component Imports
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

// Page Imports
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegistrationSuccessPage from './pages/RegistrationSuccessPage.jsx'; 
import ArbitratorRegistrationPage from './pages/ArbitratorRegistrationPage.jsx';
import FindArbitratorPage from './pages/FindArbitratorPage.jsx';
import ArbitratorSuccessPage from './pages/ArbitratorSuccessPage.jsx';
import CaseSuccessPage from './pages/CaseSuccessPage.jsx';
import CaseHistoryPage from './pages/CaseHistoryPage.jsx';

// "File a Case" Step Component Imports
import Step1_PartyDetails from './components/FileCase/Step1_PartyDetails';
import Step2_DisputeType from './components/FileCase/Step2_DisputeType';
import Step3_CaseDetails from './components/FileCase/Step3_CaseDetails';
import Step4_ArbitratorExpertise from './components/FileCase/Step4_ArbitratorExpertise';


// ----------------------------------------------------
// --- The "File a Case" Page Component ---
// This now passes its data up to App.jsx upon completion.
// ----------------------------------------------------
function FileCasePage({ onCaseFiled }) {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const steps = [
        { id: 1, name: 'Claimant & Respondent Details' },
        { id: 2, name: 'Dispute Type' },
        { id: 3, name: 'Details' },
        { id: 4, name: 'Type & Expertise' },
    ];

    const handleNext = () => currentStep < steps.length && setCurrentStep(prev => prev + 1);
    const handleBack = () => currentStep > 1 && setCurrentStep(prev => prev - 1);
    
    const handleComplete = () => {
        const caseId = `CS-${Date.now().toString().slice(-6)}`;
        const finalData = { 
            ...formData, 
            caseId, 
            status: 'Filed', 
            date: new Date().toLocaleDateString() 
        };
        onCaseFiled(finalData); // Pass the completed data up to App.jsx
        navigate('/case-filed-success', { state: { caseId: caseId } });
    };

    const updateFormData = (field, value) => setFormData(prev => ({...prev, [field]: value}));

    return (
        <div className="flex h-screen bg-gray-100 font-lato">
            <Sidebar />
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
                <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex">
                    <aside className="w-1/4 p-8 border-r border-gray-200 hidden md:block">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Form II</h2>
                        <p className="text-sm text-gray-500 mb-8">Dispute Filing</p>
                        <nav>
                            <ol className="space-y-6">
                                {steps.map((step, index) => (
                                    <li key={step.name} className="flex items-start">
                                        <div className="flex flex-col items-center mr-4">
                                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold transition-colors ${currentStep >= step.id ? 'bg-blue-600' : 'bg-gray-300'}`}>{currentStep > step.id ? '✔' : step.id}</div>
                                            {index < steps.length - 1 && <div className="h-10 w-0.5 bg-gray-200 mt-2"></div>}
                                        </div>
                                        <span className={`pt-1 text-sm font-medium transition-colors ${currentStep === step.id ? 'text-blue-600' : 'text-gray-900'}`}>{step.name}</span>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </aside>

                    <main className="w-full md:w-3/4 p-6 md:p-8">
                        <header className="flex justify-between items-center mb-8">
                            <button onClick={handleBack} className={`text-sm font-medium text-gray-600 hover:text-black flex items-center ${currentStep === 1 ? 'invisible' : 'visible'}`}><span className="material-icons mr-1">arrow_back</span>Back to {steps.find(s => s.id === currentStep-1)?.name}</button>
                            <button className="text-sm font-medium text-green-600 hover:text-green-800 flex items-center border border-green-600 px-3 py-1 rounded-md"><span className="material-icons mr-2 text-base">save</span>Save as draft</button>
                        </header>
                        <div className="mb-8">
                            {currentStep === 1 && <Step1_PartyDetails updateFormData={updateFormData} />}
                            {currentStep === 2 && <Step2_DisputeType updateFormData={updateFormData} />}
                            {currentStep === 3 && <Step3_CaseDetails updateFormData={updateFormData} />}
                            {currentStep === 4 && <Step4_ArbitratorExpertise updateFormData={updateFormData} />}
                        </div>
                        {currentStep < steps.length && <div className="flex justify-end"><button onClick={handleNext} className="py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Next Step →</button></div>}
                        {currentStep === steps.length && <div className="flex justify-end"><button onClick={handleComplete} className="py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Complete Filing →</button></div>}
                    </main>
                </div>
            </div>
        </div>
    );
}

// -------------------------------------------
// --- The Main App Component ---
// -------------------------------------------
function App() {
  const [user, setUser] = useState(null);
  const [arbitrators, setArbitrators] = useState(() => { const saved = localStorage.getItem('arbitrators'); return saved ? JSON.parse(saved) : []; });
  const [cases, setCases] = useState(() => { const saved = localStorage.getItem('cases'); return saved ? JSON.parse(saved) : []; });

  useEffect(() => { localStorage.setItem('arbitrators', JSON.stringify(arbitrators.map(({ certificateFile, ...rest }) => rest))); }, [arbitrators]);
  useEffect(() => { localStorage.setItem('cases', JSON.stringify(cases)); }, [cases]);

  const handleLogin = (role) => setUser({ name: role === 'user' ? 'Sanjeev Mehra' : 'Adv. Priya Sharma', role: role });
  const handleLogout = () => setUser(null);
  const handleRegistrationComplete = (formData) => setUser({ name: formData.name, role: 'user' });
  const handleArbitratorRegistration = (newData) => setArbitrators(prev => [...prev, { id: Date.now(), ...newData }]);
  const handleCaseFiled = (newCaseData) => setCases(prevCases => [...prevCases, newCaseData]);

  return (
    <Routes>
      <Route path="/" element={<div className="flex h-screen bg-[var(--accent-color)]"><Sidebar user={user} onLogout={handleLogout} /><Dashboard user={user} /></div>} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegistrationPage onRegistrationComplete={handleRegistrationComplete} />} />
      <Route path="/registration-success" element={<RegistrationSuccessPage />} />
      <Route path="/register-arbitrator" element={<ArbitratorRegistrationPage onComplete={handleArbitratorRegistration} />} />
      <Route path="/arbitrator-registration-success" element={<ArbitratorSuccessPage />} />
      <Route path="/find-arbitrator" element={ <div className="flex h-screen bg-[var(--accent-color)]"> <Sidebar user={user} onLogout={handleLogout} /> <FindArbitratorPage arbitrators={arbitrators} /> </div> } />
      <Route path="/case-filed-success" element={<CaseSuccessPage />} />
      
      {/* Updated Routes */}
      <Route path="/file-a-case" element={ user ? <FileCasePage onCaseFiled={handleCaseFiled} /> : <Navigate to="/login" /> } />
      <Route path="/history" element={ user ? <div className="flex h-screen bg-[var(--accent-color)]"> <Sidebar user={user} onLogout={handleLogout} /> <CaseHistoryPage cases={cases} /> </div> : <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;