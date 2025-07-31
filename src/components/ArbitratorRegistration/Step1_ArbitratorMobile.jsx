import React, { useState } from 'react';

// This is just a UI component now. The parent handles the "Next" click.
export default function Step1_ArbitratorMobile({ updateFormData }) {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
      if (phone.length === 10) {
        updateFormData('contactNumber', `+91 ${phone}`);
        setOtpSent(true);
      }
  };
  
  return (
    <div>
      {!otpSent ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile Number</h2>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number of the Arbitrator</label>
          <div className="mt-1 flex rounded-lg shadow-sm">
            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600">+91</span>
            <input 
              type="tel" name="phone" id="phone" value={phone} 
              onChange={e => /^\d*$/.test(e.target.value) && setPhone(e.target.value)}
              className="flex-1 block w-full px-4 py-3 rounded-none rounded-r-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900" 
              placeholder="98765 43210" maxLength="10" 
            />
          </div>
          <div className="flex justify-end mt-4">
              <button onClick={handleSendOtp} className="py-2 px-6 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 font-semibold">Get OTP</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Verify Mobile Number</h2>
          <p className="text-sm text-red-500 my-2">*Please check your messages for OTP*</p>
          <label className="block text-sm font-medium text-gray-700">Enter OTP Below</label>
          <div className="flex gap-4 mt-2">
            {[...Array(4)].map((_, i) => <input key={i} type="text" maxLength="1" className="w-14 h-14 text-center border border-gray-300 rounded-md text-2xl text-gray-900" />)}
          </div>
        </div>
      )}
    </div>
  );
}