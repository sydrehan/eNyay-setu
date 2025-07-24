import React, { useState } from 'react';

export default function Step3_CaseDetails({ updateFormData, formData }) {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
        updateFormData('attachments', [...files, ...selectedFiles]);
    };
    
    const removeFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        updateFormData('attachments', newFiles);
    };

    const inputStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">description</span>Details</h3>
            <div><label className="block text-sm font-medium text-gray-700">Case Name</label><input type="text" name="caseName" onChange={(e) => updateFormData(e.target.name, e.target.value)} className={inputStyle} /></div>
            <div className="mt-4"><label className="block text-sm font-medium text-gray-700">Brief Description of Dispute</label><textarea name="caseDescription" rows="4" onChange={(e) => updateFormData(e.target.name, e.target.value)} className={inputStyle} placeholder="Enter details here." /></div>
            
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Upload Agreement Attachments</label>
                {files.length > 0 && (
                    <div className="mt-2 space-y-2">
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded-md">
                                <div className="flex items-center">
                                    <span className="material-icons text-blue-500 mr-2">insert_drive_file</span>
                                    <p className="text-sm text-gray-800">{file.name}</p>
                                </div>
                                <button onClick={() => removeFile(index)} className="p-1 rounded-full hover:bg-red-100"><span className="material-icons text-red-500 text-lg">cancel</span></button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center"><span className="material-icons text-5xl text-gray-400">cloud_upload</span>
                        <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"><p>Choose files</p><input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} multiple className="sr-only"/></label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">Up to 20MB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}