import React from 'react';

export default function Step3_UserDetails({ updateFormData, formData }) {
  const handleChange = (e) => updateFormData(e.target.name, e.target.value);
  const inputStyle = "w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-brand-accent focus:ring-0 transition-all text-brand-dark placeholder:text-gray-400";

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
        <input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} className={inputStyle}/>
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
        <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={inputStyle}/>
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="password">Password <span className="text-red-500">*</span></label>
        <input id="password" name="password" type="password" placeholder="Choose a strong password" value={formData.password} onChange={handleChange} className={inputStyle}/>
      </div>
    </div>
  );
}