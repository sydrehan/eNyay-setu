import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Step1 from '../components/ArbitratorRegistration/Step1_ArbitratorMobile';
import Step2 from '../components/ArbitratorRegistration/Step2_ArbitratorDetails';
import Step3 from '../components/ArbitratorRegistration/Step3_CertificationDetails';

const steps = [
  { id: 1, name: 'Mobile Number', subtext: 'Verification' },
  { id: 2, name: 'Arbitrator Details' },
  { id: 3, name: 'Certification Details' }
];

export default function ArbitratorRegistrationPage({ onComplete }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const updateFormData = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleNext = () => currentStep < 3 && setCurrentStep(prev => prev + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(prev => prev - 1);
  const handleComplete = () => { onComplete(formData); navigate('/arbitrator-registration-success'); };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1: return <Step1 updateFormData={updateFormData} />;
      case 2: return <Step2 updateFormData={updateFormData} initialData={formData} />;
      case 3: return <Step3 updateFormData={updateFormData} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-secondary p-4 sm:p-6 md:p-8 flex flex-col font-lato">
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-brand-light playfair-display">Arbitrator Registration</h1>
        <Link to="/" className="text-sm font-medium text-brand-accent hover:text-white flex items-center">
          <span className="material-icons text-base mr-1">arrow_back</span>Back to Home
        </Link>
      </header>

      <div className="flex-grow bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        <aside className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <nav>
                <ol>
                {steps.map((step, index) => (
                    <li key={step.id} className="relative pb-10">
                        {index < steps.length - 1 && (<div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-200" />)}
                        <div className="relative flex items-start">
                            <span className="h-9 flex items-center"><span className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full font-bold text-white ${currentStep >= step.id ? 'bg-brand-accent text-brand-dark' : 'bg-brand-gray'}`}>{currentStep > step.id ? '✔' : step.id}</span></span>
                            <span className="ml-4 flex min-w-0 flex-col pt-1"><span className={`text-md font-bold ${currentStep === step.id ? 'text-brand-dark' : 'text-brand-gray'}`}>{step.name}</span>{step.subtext && <span className="text-sm text-brand-gray">{step.subtext}</span>}</span>
                        </div>
                    </li>
                ))}
                </ol>
            </nav>
        </aside>

        <main className="w-full md:w-2/3 p-8 flex flex-col justify-between">
            <div>{renderStepContent()}</div>
            <footer className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <button onClick={handleBack} className={`py-2 px-6 font-semibold rounded-lg text-brand-dark bg-brand-light border border-brand-gray hover:bg-gray-200 transition-opacity ${currentStep === 1 ? 'invisible' : 'visible'}`}>← Previous</button>
                {currentStep < 3 ? (<button onClick={handleNext} className="py-3 px-8 text-brand-dark bg-brand-accent rounded-lg shadow-md hover:bg-opacity-90 font-semibold">Next Step →</button>) : (<button onClick={handleComplete} className="py-3 px-8 text-brand-dark bg-brand-accent rounded-lg shadow-md hover:bg-opacity-90 font-semibold">Complete Registration →</button>)}
            </footer>
        </main>
      </div>
    </div>
  );
}