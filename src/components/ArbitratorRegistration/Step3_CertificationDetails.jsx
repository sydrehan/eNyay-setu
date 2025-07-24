import React, { useState } from 'react';

export default function Step3_CertificationDetails({ onComplete, updateFormData, errors }) {
    const [fileName, setFileName] = useState('');

    const handleChange = (e) => updateFormData(e.target.name, e.target.value);
    
    // This new function handles the file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            updateFormData('certificateFile', file);
            setFileName(file.name);
        }
    };

    const inputStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
    const errorStyle = "text-red-500 text-xs mt-1";
    
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">verified</span>Certification Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div><label htmlFor="regInstitute" className="block text-sm font-medium text-gray-700">Registration Institute</label><input type="text" name="regInstitute" onChange={handleChange} className={inputStyle}/></div>
                <div><label htmlFor="certNumber" className="block text-sm font-medium text-gray-700">Certificate Number</label><input type="text" name="certNumber" onChange={handleChange} className={inputStyle}/></div>
                <div className="md:col-span-2">
                    <label htmlFor="arbitratorType" className="block text-sm font-medium text-gray-700">Type of Arbitrator <span className="text-red-500">*</span></label>
                    <select id="arbitratorType" name="arbitratorType" onChange={handleChange} className={inputStyle} defaultValue=""><option value="" disabled>Select from dropdown</option><option>Executive</option><option>Judicial</option><option>Construction</option><option>Maritime</option></select>
                    {errors.arbitratorType && <p className={errorStyle}>{errors.arbitratorType}</p>}
                </div>
            </div>
            
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Upload Arbitration Certificate</label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <span className="material-icons text-5xl text-gray-400">cloud_upload</span>
                        <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                <span>Choose a file</span>
                                <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} className="sr-only"/>
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                        {/* Show the selected file name for user feedback */}
                        {fileName && <p className="text-sm font-semibold text-green-600 mt-2">{fileName}</p>}
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <button onClick={onComplete} className="py-3 px-8 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Complete Registration →</button>
            </div>
        </div>
    );
}