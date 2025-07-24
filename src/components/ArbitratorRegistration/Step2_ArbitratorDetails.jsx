import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';

export default function Step2_ArbitratorDetails({ onNext, updateFormData, formData, errors }) {
  const countries = useMemo(() => countryList().getData(), []);
  // Preview state is still useful for immediate visual feedback
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };
  
  // THIS IS THE NEW, UPGRADED FUNCTION
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a new FileReader instance
      const reader = new FileReader();

      // This function will run when the file has been successfully read
      reader.onload = () => {
        // The result is the Base64 text string of the image
        const base64String = reader.result;
        // Update the form data with the Base64 string
        updateFormData('profileImage', base64String);
        // Also update the preview for the UI
        setPreview(base64String);
      };
      
      // This tells the reader to start reading the file and convert it
      reader.readAsDataURL(file);
    }
  };
  
  const inputStyle = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
  const errorStyle = "text-red-500 text-xs mt-1";

  // The rest of the component's JSX is identical and remains correct.
  return (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6"><span className="material-icons text-blue-600 mr-3">person_pin</span>Arbitrator Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
            <div className="md:col-span-1 flex flex-col items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture <span className="text-red-500">*</span></label>
                <div className="w-28 h-28 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2 overflow-hidden">
                    {preview ? <img src={preview} alt="Profile preview" className="w-full h-full object-cover" /> : <span className="material-icons text-gray-400" style={{ fontSize: '60px' }}>person</span>}
                </div>
                <label htmlFor="profileImage" className="cursor-pointer text-sm text-blue-600 hover:text-blue-800 font-semibold">Upload Image</label>
                <input type="file" id="profileImage" name="profileImage" onChange={handleImageChange} accept="image/png, image/jpeg" className="sr-only"/>
                {errors.profileImage && <p className={errorStyle}>{errors.profileImage}</p>}
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label><input type="text" name="name" onChange={handleChange} className={inputStyle} />{errors.name && <p className={errorStyle}>{errors.name}</p>}</div>
                <div><label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label><input type="tel" value={formData.contactNumber || ''} disabled className={`${inputStyle} bg-gray-100 cursor-not-allowed`} /></div>
                <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" name="email" onChange={handleChange} className={inputStyle} /></div>
                <div><label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label><select name="nationality" onChange={handleChange} className={inputStyle} defaultValue=""><option value="">Select Country...</option>{countries.map(c => <option key={c.value}>{c.label}</option>)}</select></div>
                <div><label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience <span className="text-red-500">*</span></label><input type="number" name="experience" min="0" onChange={handleChange} className={inputStyle} />{errors.experience && <p className={errorStyle}>{errors.experience}</p>}</div>
                <div><label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type <span className="text-red-500">*</span></label><select id="employmentType" name="employmentType" onChange={handleChange} className={inputStyle} defaultValue=""><option value="" disabled>Select...</option><option>Self Employed</option><option>Law Firm</option><option>Corporate Counsel</option><option>Government</option></select>{errors.employmentType && <p className={errorStyle}>{errors.employmentType}</p>}</div>
            </div>
        </div>
        <div className="border-t my-8"></div>
        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4"><span className="material-icons text-blue-600 mr-3">school</span>Education Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div><label htmlFor="highestEducation" className="block text-sm font-medium text-gray-700">Highest Education</label><select id="highestEducation" name="highestEducation" onChange={handleChange} className={inputStyle} defaultValue=""><option value="" disabled>Select Qualification...</option><option value="Graduate (LL.B.)">Graduate (LL.B.)</option><option value="Post-Graduate (LL.M.)">Post-Graduate (LL.M.)</option><option value="Doctorate (Ph.D.)">Doctorate (Ph.D.)</option><option value="PG Diploma in ADR">PG Diploma in ADR</option><option value="Chartered Arbitrator">Chartered Arbitrator</option><option value="Other">Other</option></select></div>
            <div><label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College/University</label><input type="text" name="collegeName" onChange={handleChange} className={inputStyle}/></div>
        </div>
        <div className="flex justify-end mt-8"><button onClick={onNext} className="py-3 px-8 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Next Step →</button></div>
    </div>
  );
}