import React from 'react';

export default function Step1_EnterPhone({ updateFormData, formData }) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="phone">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="flex rounded-lg shadow-sm">
        <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-brand-gray">+91</span>
        <input 
          id="phone" 
          name="phone" 
          type="tel" 
          maxLength="10"
          placeholder="98765 43210"
          value={formData.phone}
          onChange={(e) => /^\d*$/.test(e.target.value) && updateFormData('phone', e.target.value)}
          className="w-full px-5 py-3 rounded-r-lg border border-gray-300 focus:border-brand-accent focus:ring-0 transition-all text-brand-dark"
        />
      </div>
    </div>
  );
}