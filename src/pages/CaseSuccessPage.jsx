// src/pages/CaseSuccessPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CaseSuccessPage() {
    const location = useLocation();
    // Get the case ID passed from the previous page's navigation state
    const caseId = location.state?.caseId || 'N/A';

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center font-lato">
            <div className="bg-white rounded-xl shadow-2xl p-10 md:p-12 text-center w-full max-w-lg border border-gray-200">
                
                {/* Professional Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="material-icons text-4xl text-blue-600">assignment_turned_in</span>
                    </div>
                </div>

                {/* Confirmation Text */}
                <h1 className="text-3xl font-bold font-merriweather text-custom-navy">
                    Case Filed Successfully!
                </h1>
                <p className="text-gray-600 mt-4">
                    Your case details have been submitted for review.
                </p>
                <p className="text-gray-700 mt-2">
                    Your Case Reference ID is: <span className="font-semibold bg-gray-100 px-2 py-1 rounded">{caseId}</span>
                </p>

                {/* Back to Home Button */}
                <Link 
                    to="/" 
                    className="inline-block mt-8 py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors font-semibold"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}