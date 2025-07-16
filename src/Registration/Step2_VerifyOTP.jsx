// src/components/FileCase/Step2_VerifyOTP.jsx
import React from 'react';

// This component also receives onNext and onBack functions as props
export default function Step2_VerifyOTP({ onNext, onBack }) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-custom-navy font-merriweather">Verify Mobile Number</h2>
        <p className="text-gray-600 mt-2">An OTP has been sent to your mobile number.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="otp">
          Enter OTP
        </label>
        {/* We can add auto-focus logic later to make this more interactive */}
        <div className="flex justify-center space-x-2 sm:space-x-4">
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
          <input className="w-1/6 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold" maxLength="1" type="text" />
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-10">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-custom-navy">
          <span className="material-icons mr-2">arrow_back</span>
          Previous Step
        </button>
        <button onClick={onNext} className="bg-custom-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 flex items-center">
          Verify & Proceed
          <span className="material-icons ml-2">arrow_forward</span>
        </button>
      </div>
    </>
  );
}