import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Import all the step components for the form
import Step1_PartyDetails from '../components/FileCase/Step1_PartyDetails';
import Step2_DisputeType from '../components/FileCase/Step2_DisputeType';
import Step3_CaseDetails from '../components/FileCase/Step3_CaseDetails';
import Step4_ArbitratorExpertise from '../components/FileCase/Step4_ArbitratorExpertise';

export default function FileCasePage({ onCaseFiled, user }) {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    
    const steps = [
        { id: 1, name: 'Claimant & Respondent' }, { id: 2, name: 'Dispute Type' }, 
        { id: 3, name: 'Case Details' }, { id: 4, name: 'Arbitrator Selection' }
    ];

    const updateFormData = (field, value) => setFormData(prev => ({...prev, [field]: value}));
    const handleNext = () => setCurrentStep(p => p < 4 ? p + 1 : p);
    const handleBack = () => setCurrentStep(p => p > 1 ? p - 1 : p);
    
    const handleComplete = () => {
        const caseId = `CS-${Date.now().toString().slice(-6)}`;
        onCaseFiled({ ...formData, caseId, status: 'Filed', date: new Date().toLocaleDateString() });
        navigate('/case-filed-success', { state: { caseId } });
    };

    const renderStepContent = () => {
        switch(currentStep) {
            case 1: return <Step1_PartyDetails updateFormData={updateFormData} />;
            case 2: return <Step2_DisputeType updateFormData={updateFormData} />;
            case 3: return <Step3_CaseDetails updateFormData={updateFormData} />;
            case 4: return <Step4_ArbitratorExpertise updateFormData={updateFormData} />;
            default: return null;
        }
    };

    return (
        <div className="flex h-screen bg-brand-secondary">
            <Sidebar user={user} />
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
                <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
                    <aside className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                        <h2 className="text-2xl font-bold text-brand-dark mb-2 playfair-display">File Your Case</h2>
                        <p className="text-sm text-brand-gray mb-8">Please fill in all the details accurately.</p>
                        <nav>
                            <ol>
                            {steps.map((step, index) => (
                                <li key={step.id} className="relative pb-10">
                                    {index < steps.length - 1 && (<div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-200" />)}
                                    <div className="relative flex items-start">
                                        <span className="h-9 flex items-center">
                                            <span className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full font-bold text-white ${currentStep >= step.id ? 'bg-brand-accent text-brand-dark' : 'bg-brand-gray'}`}>{currentStep > step.id ? '✔' : step.id}</span>
                                        </span>
                                        <span className="ml-4 flex min-w-0 flex-col pt-1"><span className={`text-md font-bold ${currentStep === step.id ? 'text-brand-dark' : 'text-brand-gray'}`}>{step.name}</span></span>
                                    </div>
                                </li>
                            ))}
                            </ol>
                        </nav>
                    </aside>

                    <main className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {renderStepContent()}
                        </div>
                        <footer className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                            <button onClick={handleBack} className={`py-2 px-6 font-semibold rounded-lg text-brand-dark bg-brand-light border border-brand-gray hover:bg-gray-200 transition-opacity ${currentStep === 1 ? 'invisible' : 'visible'}`}>← Back</button>
                            {currentStep < steps.length ? (
                                <button onClick={handleNext} className="py-3 px-8 text-brand-dark bg-brand-accent rounded-lg shadow-md hover:bg-opacity-90 font-semibold">Next Step →</button>
                            ) : (
                                <button onClick={handleComplete} className="py-3 px-8 text-brand-dark bg-brand-accent rounded-lg shadow-md hover:bg-opacity-90 font-semibold">Complete Filing →</button>
                            )}
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}