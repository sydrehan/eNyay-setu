import React from 'react';

// 1. Accept formData and updateFormData as props
export default function Step1_EnterPhone({ onNext, onBack, formData, updateFormData }) {
  
  // 2. Handle input changes by calling the function from the parent
  const handleChange = (e) => {
    updateFormData('phone', e.target.value);
  };

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold focus:border-transparent"
          id="phone"
          name="phone"
          placeholder="Enter your Mobile Number"
          type="tel"
          // 3. Set the value from and send changes to the parent's state
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between items-center mt-10">
        <button onClick={() => onBack()} className="flex items-center text-gray-600 hover:text-custom-navy">
          <span className="material-icons mr-2">arrow_back</span>
          Cancel and Go Back
        </button>
        <button onClick={onNext} className="bg-custom-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 flex items-center">
          Get OTP
          <span className="material-icons ml-2">arrow_forward</span>
        </button>
      </div>
    </>
  );
}