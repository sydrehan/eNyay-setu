import React, { useState, useRef } from 'react';

export default function Step1_ArbitratorMobile({ onNext, updateFormData }) {
  const [showOtp, setShowOtp] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      updateFormData('contactNumber', `+91 ${phone}`);
      setShowOtp(true);
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };
  
  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };
  
  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
            <span className="material-icons text-blue-600 mr-3">list_alt</span>Mobile Number
          </h2>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number of the Arbitrator</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-600 sm:text-sm">+91</span>
              <input type="tel" name="phone" id="phone" value={phone} 
                onChange={e => /^\d*$/.test(e.target.value) && setPhone(e.target.value)}
                className="flex-1 min-w-0 block w-full px-4 py-3 border border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="98765 43210" maxLength="10" required />
            </div>
          </div>
          <button type="submit" className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Next Step →
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-1">
            <span className="material-icons text-blue-600 mr-3">task_alt</span>Verify Mobile Number
          </h2>
          <p className="text-red-500 font-semibold my-2 text-center text-sm">*Please Check your messages for OTP*</p>
          <label className="block text-sm font-medium text-gray-700 text-center">Enter OTP Below</label>
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-2">
            {otp.map((digit, index) => (
              <input key={index} type="text" maxLength="1" value={digit}
                ref={el => otpInputs.current[index] = el}
                onChange={e => handleOtpChange(e, index)}
                onKeyDown={e => handleBackspace(e, index)}
                className="w-14 h-14 text-center border border-gray-300 rounded-md text-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
            ))}
          </div>
          <button onClick={onNext} disabled={!isOtpComplete} className="w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
            Next Step →
          </button>
        </>
      )}
    </div>
  );
}