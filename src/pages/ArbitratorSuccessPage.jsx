// src/pages/ArbitratorSuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ArbitratorSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-800 p-8 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl p-12 text-center w-full max-w-lg">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800">Registered as Arbitrator</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Successfully!</h2>
                <p className="text-gray-500 mt-4">You will be notified once the details are verified</p>
                <Link to="/" className="inline-block mt-8 py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Back to home page →
                </Link>
            </div>
        </div>
    );
}