import React from 'react';

export default function Step2_DisputeType({ updateFormData, formData }) {
  const selectStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">gavel</span>Dispute Type</h3>
      <label className="block text-sm font-medium text-gray-700">Choose from below dropdown</label>
      <select name="disputeType" onChange={(e) => updateFormData(e.target.name, e.target.value)} className={selectStyle} defaultValue="">
        <option value="" disabled>Select from dropdown - most used will be default</option>
        <option>Commercial Contract Dispute</option>
        <option>Real Estate & Property Dispute</option>
        <option>Construction & Infrastructure</option>
        <option>Intellectual Property</option>
        <option>Employment Dispute</option>
      </select>
    </div>
  );
}