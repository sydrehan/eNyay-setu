import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Import all the step components
import Step1 from '../components/ArbitratorRegistration/Step1_ArbitratorMobile';
import Step2 from '../components/ArbitratorRegistration/Step2_ArbitratorDetails';
import Step3 from '../components/ArbitratorRegistration/Step3_CertificationDetails';

// UPDATED: This now includes the new mandatory fields for validation
const steps = [
  { id: 1, name: 'Mobile Number & Verification', fields: ['contactNumber'] },
  { id: 2, name: 'Arbitrator Details', fields: ['name', 'experience', 'profileImage', 'employmentType'] },
  { id: 3, name: 'Certification Details', fields: ['arbitratorType'] }
];

export default function ArbitratorRegistrationPage({ onComplete }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Function to update form data from child components
  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({...prev, [field]: null}));
    }
  };

  // New validation function
  const validateCurrentStep = () => {
    const currentStepFields = steps.find(s => s.id === currentStep)?.fields || [];
    const newErrors = {};
    let isValid = true;

    for (const field of currentStepFields) {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  }

  // Go to next step if current step is valid
  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  // Complete the registration if the final step is valid
  const handleComplete = () => {
    if (validateCurrentStep()) {
        onComplete(formData); 
        navigate('/arbitrator-registration-success');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col font-lato">
      {/* UPDATED HEADER: Includes the "Back to Home" button */}
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Arbitrator Registration</h2>
          <Link to="/" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
            <span className="material-icons text-base mr-1">arrow_back</span>
            Back to Home
          </Link>
      </header>

      {/* Main content card */}
      <div className="flex-grow bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row">
        
        {/* Left Side: Vertical Stepper */}
        <aside className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8 md:border-r md:border-gray-200">
          <nav>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step.name} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold transition-colors ${currentStep >= step.id ? 'bg-blue-600' : 'bg-gray-300'}`}>
                      {currentStep > step.id ? '✔' : step.id}
                    </div>
                    {index < steps.length - 1 && (<div className="h-16 w-0.5 bg-gray-200 mt-2"></div>)}
                  </div>
                  <div className="pt-1">
                      <p className={`text-md font-medium ${currentStep === step.id ? 'text-blue-600' : 'text-gray-900'}`}>{step.name.split(' & ')[0]}</p>
                      {step.name.split(' & ')[1] && <p className="text-xs text-gray-500">{step.name.split(' & ')[1]}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Right Side: Dynamic Step Content */}
        <main className="w-full md:w-3/4 md:pl-8">
          {currentStep === 1 && <Step1 onNext={handleNext} updateFormData={updateFormData} formData={formData} errors={errors} />}
          {currentStep === 2 && <Step2 onNext={handleNext} updateFormData={updateFormData} formData={formData} errors={errors} />}
          {currentStep === 3 && <Step3 onComplete={handleComplete} updateFormData={updateFormData} formData={formData} errors={errors} />}
        </main>
      </div>
    </div>
  );
}