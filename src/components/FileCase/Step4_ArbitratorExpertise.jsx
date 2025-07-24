import React from 'react';

export default function Step4_ArbitratorExpertise({ updateFormData, formData }) {
    const selectStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
    
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">manage_accounts</span>Type & Expertise</h3>
            <div><label className="block text-sm font-medium text-gray-700">Type of Arbitrator</label><select name="arbitratorChoice" onChange={(e) => updateFormData(e.target.name, e.target.value)} className={selectStyle} defaultValue=""><option value="" disabled>Select Arbitrator Type</option><option>Sole Arbitrator</option><option>Three-Member Panel</option></select></div>
            <div className="mt-4"><label className="block text-sm font-medium text-gray-700">Required Expertise</label><select name="arbitratorExpertise" onChange={(e) => updateFormData(e.target.name, e.target.value)} className={selectStyle} defaultValue=""><option value="" disabled>Select from dropdown - most used will be default</option><option>Corporate Law</option><option>Intellectual Property Law</option><option>Real Estate Law</option><option>International Trade</option></select></div>
        </div>
    );
}