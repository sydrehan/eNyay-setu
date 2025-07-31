import React from 'react';

export default function Step2_VerifyOTP() {
  return (
    <div className="text-center">
      <p className="text-brand-gray mb-4">An OTP has been sent to your mobile number for verification.</p>
      <div className="flex justify-center gap-2 sm:gap-4">
        {[...Array(6)].map((_, i) => (
          <input key={i} type="text" maxLength="1" className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent" />
        ))}
      </div>
    </div>
  );
}