import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// A helper function to get the appropriate styles and icon for each case status
const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
        case 'under verification':
            return { text: 'Under Verification', icon: 'hourglass_top', classes: 'bg-yellow-100 text-yellow-800' };
        case 'revoked':
            return { text: 'Revoked', icon: 'gpp_bad', classes: 'bg-red-100 text-red-700' };
        case 'in progress':
            return { text: 'In Progress', icon: 'autorenew', classes: 'bg-indigo-100 text-indigo-800' };
        case 'resolved':
            return { text: 'Resolved', icon: 'check_circle', classes: 'bg-green-100 text-green-800' };
        default:
            return { text: 'Filed', icon: 'folder_open', classes: 'bg-blue-100 text-blue-800' };
    }
};

// --- The New, Professional Case Card Component ---
const CaseCard = ({ caseItem }) => {
    const status = getStatusBadge(caseItem.status);

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Header Section */}
            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Case No: {caseItem.caseId}</p>
                    <h3 className="text-lg font-bold text-gray-800">{caseItem.caseName || 'N/A'}</h3>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-gray-400">folder_zip</span>
                </div>
            </div>

            {/* Brief/Content Section */}
            <div className="p-5 flex-grow">
                <p className="text-sm font-semibold text-gray-500 mb-1">Brief</p>
                <p className="text-sm text-gray-700 line-clamp-2">{caseItem.caseDescription || 'No description provided.'}</p>
            </div>
            
            {/* Metadata Footer */}
            <div className="px-5 pb-4 text-xs text-gray-500 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="material-icons text-base mr-1">attachment</span>
                    <span>{caseItem.attachments?.length || 0} Attachments</span>
                </div>
                <span>Filed on: {caseItem.date}</span>
            </div>

            {/* Status & Actions Footer */}
            <div className="p-4 bg-gray-50 rounded-b-xl border-t border-gray-200 flex justify-between items-center">
                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${status.classes}`}>
                    <span className="material-icons text-sm mr-1.5">{status.icon}</span>
                    {status.text}
                </span>
                <Link to="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
                    More details <span className="material-icons text-lg ml-1">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
};

// --- The Main Page Component ---
export default function CaseHistoryPage({ cases }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Live filtering logic for the search bar
  const filteredCases = cases.filter(caseItem =>
    caseItem.caseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.caseId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
        <div>
            <h2 className="text-4xl font-bold text-primary playfair-display">Case History</h2>
            <p className="text-gray-600 mt-1">Search, view, and manage your filed cases.</p>
        </div>
        <div className="relative w-full md:w-80">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
                type="text"
                placeholder="Search your case..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* Conditional Rendering for cases */}
      {cases.length === 0 ? (
        <div className="text-center py-20 px-6 bg-white rounded-lg shadow-md border">
            <span className="material-icons text-6xl text-gray-300">history</span>
            <p className="text-xl font-semibold text-gray-700 mt-4">No Cases Filed Yet</p>
            <p className="text-gray-500 mt-1">Your case history will appear here once you file your first case.</p>
        </div>
      ) : filteredCases.length === 0 ? (
         <div className="text-center py-20 px-6 bg-white rounded-lg shadow-md border">
            <span className="material-icons text-6xl text-gray-300">search_off</span>
            <p className="text-xl font-semibold text-gray-700 mt-4">No Cases Match Your Search</p>
            <p className="text-gray-500 mt-1">Try different keywords to find the case you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.caseId} caseItem={caseItem} />
            ))}
        </div>
      )}
    </main>
  );
}