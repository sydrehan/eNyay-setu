import React from 'react';

// This is a simple, "dumb" component. It only displays form fields.
// The "Complete Registration" button is handled by the parent page.
export default function Step3_CertificationDetails({ updateFormData }) {
    const handleChange = (e) => {
        updateFormData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        // We will just store the file name for now. We can handle the file object later.
        const file = e.target.files[0];
        if (file) {
            updateFormData('certificateFile', file.name);
        }
    };
    
    const inputStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900";

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="material-icons">verified</span>
                </div>
                Certification Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                    <label htmlFor="regInstitute" className="block text-sm font-medium text-gray-700">Arbitration Registration Institute</label>
                    <input type="text" name="regInstitute" id="regInstitute" onChange={handleChange} className={inputStyle} />
                </div>
                <div>
                    <label htmlFor="certNumber" className="block text-sm font-medium text-gray-700">Certificate Number</label>
                    <input type="text" name="certNumber" id="certNumber" onChange={handleChange} className={inputStyle} />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="arbitratorType" className="block text-sm font-medium text-gray-700">Type of Arbitrator <span className="text-red-500">*</span></label>
                    <select id="arbitratorType" name="arbitratorType" onChange={handleChange} className={inputStyle} defaultValue="">
                        <option value="" disabled>Select from dropdown</option>
                        <option>Executive</option>
                        <option>Judicial</option>
                        <option>Construction</option>
                    </select>
                </div>
            </div>
            
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Upload Arbitration Certificate</label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <span className="material-icons text-5xl text-gray-400">cloud_upload</span>
                        <div className="flex text-sm text-gray-600 justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                <span>Choose a file</span>
                                <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} className="sr-only" />
                            </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}