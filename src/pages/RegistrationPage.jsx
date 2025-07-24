import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1_EnterPhone from '../Registration/Step1_EnterPhone.jsx';
import Step2_VerifyOTP from '../Registration/Step2_VerifyOTP.jsx';
// At the top of src/pages/RegistrationPage.jsx
import Step3_UserDetails from '../Registration/Step3_UserDetails.jsx'; // Make sure this has one .jsx

// 1. ADD 'onRegistrationComplete' to the props
export default function RegistrationPage({ onRegistrationComplete }) { 
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ phone: '', name: '', email: '' });
  const totalSteps = 3; 

  const updateFormData = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(step => step + 1);
    } else {
      // 2. THIS IS THE CRITICAL CHANGE FOR AUTO-LOGIN
      console.log('Final Registration Data Submitted:', formData);
      
      // Call the function passed from App.jsx to log the user in
      onRegistrationComplete(formData); 
      
      // Navigate to the success page and pass the user's name
      navigate('/registration-success', { state: { userName: formData.name } }); 
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(step => step - 1);
    } else {
      navigate(-1);
    }
  };
  
  // The rest of the file (progress bar, renderStep, return statement) remains the same.
  // ... (no more changes below this line in this file)
  const progressWidth = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_EnterPhone onNext={handleNextStep} onBack={handlePreviousStep} formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2_VerifyOTP onNext={handleNextStep} onBack={handlePreviousStep} />;
      case 3:
        return <Step3_UserDetails onNext={handleNextStep} onBack={handlePreviousStep} formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-custom-gray font-lato min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200">
        <header className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={handlePreviousStep} className="cursor-pointer">
              <span className="material-icons text-custom-navy">arrow_back</span>
            </button>
            <h1 className="text-2xl font-bold ml-4 text-custom-navy font-merriweather">New User Registration</h1>
          </div>
          <button className="flex items-center text-gray-600 hover:text-custom-navy">
            <span className="material-icons mr-2">help_outline</span>
            Help
          </button>
        </header>

        <main className="p-8">
          <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-md">
            <div className="mb-8">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: progressWidth }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-custom-gold transition-all duration-500"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span className={currentStep === 1 ? 'font-bold text-custom-navy' : ''}>Phone</span>
                  <span className={currentStep === 2 ? 'font-bold text-custom-navy' : ''}>Verification</span>
                  <span className={currentStep === 3 ? 'font-bold text-custom-navy' : ''}>Your Details</span>
                </div>
              </div>
            </div>
            {renderStep()}
          </div>
        </main>
      </div>
    </div>
  );
}