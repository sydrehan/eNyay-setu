import React from 'react';

export default function Step1_PartyDetails({ updateFormData, formData }) {
  const handleClaimantChange = (e) => updateFormData(`claimant_${e.target.name}`, e.target.value);
  const handleRespondentChange = (e) => updateFormData(`respondent_${e.target.name}`, e.target.value);
  const inputStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

  return (
    <div>
      {/* Claimant Details */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-red-600 mr-3">person</span>Claimant Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div><label className="block text-sm font-medium text-gray-700">Name of the Claimant</label><input type="text" name="name" onChange={handleClaimantChange} className={inputStyle} /></div>
          <div><label className="block text-sm font-medium text-gray-700">Contact Number of the Claimant</label><input type="tel" name="contact" onChange={handleClaimantChange} className={inputStyle} /></div>
          <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Address of the Claimant</label><input type="text" name="address" onChange={handleClaimantChange} className={inputStyle} /></div>
          <div><label className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" name="email" onChange={handleClaimantChange} className={inputStyle} /></div>
          <div><label className="block text-sm font-medium text-gray-700">WhatsApp Number</label><input type="tel" name="whatsapp" onChange={handleClaimantChange} className={inputStyle} /></div>
        </div>
        <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"><span className="material-icons mr-1">add_circle_outline</span>Add Claimant</button>
      </div>

      {/* Respondent Details */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">person_outline</span>Respondent Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div><label className="block text-sm font-medium text-gray-700">Name of the Respondent</label><input type="text" name="name" onChange={handleRespondentChange} className={inputStyle} /></div>
          <div><label className="block text-sm font-medium text-gray-700">Contact Number of the Respondent</label><input type="tel" name="contact" onChange={handleRespondentChange} className={inputStyle} /></div>
          <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Address of the Respondent</label><input type="text" name="address" onChange={handleRespondentChange} className={inputStyle} /></div>
        </div>
      </div>
    </div>
  );
}