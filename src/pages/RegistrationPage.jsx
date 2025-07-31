import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Step1_EnterPhone from '../Registration/Step1_EnterPhone.jsx';
import Step2_VerifyOTP from '../Registration/Step2_VerifyOTP.jsx';
import Step3_UserDetails from '../Registration/Step3_UserDetails.jsx';

export default function RegistrationPage({ onRegistrationComplete }) { 
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ phone: '', name: '', email: '', password: '' });
  const [error, setError] = useState('');
  
  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if(error) setError('');
  };

  const validateStep = () => {
      if(currentStep === 1 && formData.phone.length !== 10) { setError('Please enter a valid 10-digit phone number.'); return false; }
      if(currentStep === 3 && (!formData.name || !formData.email || !formData.password)) { setError('Please fill in all mandatory fields.'); return false; }
      setError('');
      return true;
  }

  const handleNextStep = async () => {
    if (!validateStep()) return;

    if (currentStep < 3) {
      setCurrentStep(step => step + 1);
    } else {
      try {
        await axios.post('http://localhost:3000/auth/register', formData);
        onRegistrationComplete(formData); 
        navigate('/registration-success', { state: { userName: formData.name } }); 
      } catch (err) {
        console.error("Registration failed:", err);
        setError(err.response?.data?.message || 'An error occurred during registration.');
      }
    }
  };

  const handlePreviousStep = () => currentStep > 1 ? setCurrentStep(step => step - 1) : navigate(-1);
  
  const stepTitles = ["Your Phone Number", "Verify OTP", "Your Details"];

  return (
    <div className="bg-brand-dark min-h-screen flex items-center justify-center p-4 font-lato">
      <div className="bg-white w-full max-w-xl p-8 md:p-10 rounded-2xl shadow-2xl animate-fadeInUp">
        
        <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-dark playfair-display">{stepTitles[currentStep-1]}</h1>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4">
                <div className="bg-brand-accent h-1.5 rounded-full transition-all duration-500" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
            </div>
        </header>

        <main>
          {currentStep === 1 && <Step1_EnterPhone updateFormData={updateFormData} formData={formData} />}
          {currentStep === 2 && <Step2_VerifyOTP updateFormData={updateFormData} formData={formData} />}
          {currentStep === 3 && <Step3_UserDetails updateFormData={updateFormData} formData={formData} />}

          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        </main>

        <footer className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
                <button onClick={handlePreviousStep} className="font-semibold text-brand-gray hover:text-brand-dark transition-colors">
                  {currentStep === 1 ? 'Cancel' : 'Back'}
                </button>
                <button onClick={handleNextStep} className="px-8 py-3 bg-brand-accent text-brand-dark font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-transform hover:scale-105">
                  {currentStep === 3 ? 'Complete Registration' : 'Next Step'}
                </button>
            </div>
        </footer>

      </div>
    </div>
  );
}