import React from 'react';

// CORRECTED FUNCTION NAME to match the component's purpose
export default function Step3_UserDetails({ onNext, onBack, formData, updateFormData }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold focus:border-transparent"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-gold focus:border-transparent"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone-display">Phone Number (Verified)</label>
          <input id="phone-display" name="phone-display" type="tel" value={formData.phone} disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"/>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-10">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-custom-navy">
          <span className="material-icons mr-2">arrow_back</span>Previous Step
        </button>
        {/* Button text is now correct for registration */}
        <button onClick={onNext} className="bg-custom-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 flex items-center">
          Complete Registration
          <span className="material-icons ml-2">check_circle</span>
        </button>
      </div>
    </>
  );
}