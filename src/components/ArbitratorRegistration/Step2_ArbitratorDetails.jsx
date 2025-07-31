import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';

export default function Step2_ArbitratorDetails({ updateFormData, initialData }) {
  const countries = useMemo(() => countryList().getData(), []);
  const [preview, setPreview] = useState(initialData.profileImage || null);
  
  const handleChange = (e) => updateFormData(e.target.name, e.target.value);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => { updateFormData('profileImage', reader.result); setPreview(reader.result); }
      reader.readAsDataURL(file);
    }
  };
  
  const inputStyle = "mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent sm:text-sm";
  const labelStyle = "block text-sm font-semibold text-brand-secondary";

  return (
    <div>
      <h2 className="text-3xl font-bold text-brand-dark mb-6 playfair-display">Arbitrator Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-1 flex flex-col items-center">
          <label className={`${labelStyle} mb-2`}>Profile Picture <span className="text-red-500">*</span></label>
          <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2 overflow-hidden">
            {preview ? <img src={preview} alt="Profile" className="w-full h-full object-cover" /> : <span className="material-icons text-gray-400" style={{ fontSize: '72px' }}>person</span>}
          </div>
          <label htmlFor="profileImage" className="cursor-pointer text-sm text-blue-600 hover:text-blue-800 font-semibold">Upload Image</label>
          <input type="file" id="profileImage" onChange={handleImageChange} accept="image/png, jpeg" className="sr-only"/>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div><label className={labelStyle}>Name <span className="text-red-500">*</span></label><input type="text" name="name" onChange={handleChange} className={inputStyle} /></div>
          <div><label className={labelStyle}>Contact Number</label><input type="tel" value={initialData.contactNumber || ''} disabled className={`${inputStyle} bg-gray-200 cursor-not-allowed`} /></div>
          <div><label className={labelStyle}>Email Address</label><input type="email" name="email" onChange={handleChange} className={inputStyle} /></div>
          <div><label className={labelStyle}>Nationality</label><select name="nationality" onChange={handleChange} className={inputStyle}><option>Select...</option>{countries.map(c=><option key={c.value}>{c.label}</option>)}</select></div>
          <div><label className={labelStyle}>Years of Experience <span className="text-red-500">*</span></label><input type="number" name="experience" onChange={handleChange} className={inputStyle} /></div>
          <div><label className={labelStyle}>Employment Type <span className="text-red-500">*</span></label><select name="employmentType" onChange={handleChange} className={inputStyle}><option>Select...</option><option>Self Employed</option><option>Law Firm</option></select></div>
          <div><label className={labelStyle}>Highest Education</label><select name="highestEducation" onChange={handleChange} className={inputStyle}><option>Select...</option><option>Graduate</option><option>Post Graduate</option></select></div>
          <div><label className={labelStyle}>College/University</label><input type="text" name="collegeName" onChange={handleChange} className={inputStyle} /></div>
        </div>
      </div>
    </div>
  );
}